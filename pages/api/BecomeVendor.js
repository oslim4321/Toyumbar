import { verifyToken } from "../../lib/auth";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";
import Vendor from "../../models/Vendor";

export default async function (req, res) {
  await dbConnect();

  try {
    if (req.method === "POST") {
      await verifyToken(req, res);
      const response = await User.findById(req.user.id).select("-password");
      /* check if user is alredy a vendor */
      response.role === "vendor"
        ? res.status(404).json("Invalid request! you are already a vendor")
        : "";
      const {
        name,
        description,
        contact,
        website,
        address,
        services,
        pricing,
        rating,
        photos,
        availability,
        location,
        categories,
      } = req.body;
      /* create vendor */
      await Vendor.create({
        name,
        description,
        contact,
        website,
        address,
        services,
        pricing,
        rating,
        photos,
        availability,
        location,
        categories,
      });
      /* update user role */
      const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        { role: "vendor" },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json("User not found");
      }

      res.status(200).json({ message: "You are now a vendor!" });
    } else {
      res.status(404).json("invalid method!");
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}
