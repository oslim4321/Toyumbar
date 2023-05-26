// import dbConnect from "../../lib/dbConnect";
// import Vendor from "../../models/vendor";

// export default async function handler(req, res) {
//   await dbConnect();

//   const {
//     name,
//     description,
//     contact,
//     website,
//     address,
//     services,
//     pricing,
//     rating,
//     photos,
//     availability,
//     location,
//     categories,
//   } = req.body;

//   if (req.method === "POST") {
//     const vendorExist = await Vendor.findOne({ name });

//     if (vendorExist)
//       return res.status(422).json({ message: "Vendor already exists!" });

//     const newVendor = new Vendor({
//       name,
//       description,
//       contact,
//       website,
//       address,
//       services,
//       pricing,
//       rating,
//       photos,
//       availability,
//       location,
//       categories,
//     });

//     await newVendor.save();

//     res.status(201).json({ message: "Vendor created successfully!" });
//   } else {
//     res.status(424).json({ message: "Invalid method!" });
//   }
// }
