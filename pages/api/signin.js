// import dbConnect from "../../lib/dbConnect";
// import User from "../../models/user";
// import { setCookie } from "cookies-next";
// import { createToken } from "../../lib/createToken";
// var bcrypt = require("bcryptjs");

// export default async function handler(req, res) {
//   await dbConnect();

//   console.log(req.body);
//   // return res.json({ message: req.body });
//   const { phone, password } = req.body;

//   if (!phone || !password) {
//     return res.status(422).json({ message: "Phone and password are required" });
//   }

//   if (req.method === "POST") {
//     const user = await User.findOne({ phone });

//     if (!user) return res.status(422).json({ message: "Wrong Phone!" });

//     const compare = bcrypt.compareSync(password, user.password); // true

//     if (!compare) return res.status(422).json({ message: "Wrong password!" });
//     console.log(user);
//     const token = createToken(user.phone, user._id);
//     setCookie("token", token, {
//       req,
//       res,
//       maxAge: 60 * 60 * 24, // 1 day
//       path: "/",
//     });

//     res.status(200).json({ user, token });
//   } else {
//     res.status(424).json({ message: "Invalid method!" });
//   }
// }
