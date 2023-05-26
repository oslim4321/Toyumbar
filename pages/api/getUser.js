import { verifyToken } from "../../lib/auth";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";

export default async function (req, res, next) {
  console.log("req came in");
  await dbConnect();

  try {
    await verifyToken(req, res, next);
    if (req.user) {
      const response = await User.findById(req.user.id).select("-password");

      if (!response) {
        return res.status(404).json({ message: "cant find this user" });
      }
      return res.status(200).json({ message: response });
    }
    return res.status(400).json("cant read token");
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
}
