// import { auth, RecaptchaVerifier } from "../../../lib/firebase";

// // POST /api/auth/signup
// export default async function handler(req, res) {
//   console.log("req cames in");
//   const { phone } = req.body;

//   if (req.method === "POST") {
//     // Send an SMS verification code to the user's phone number
//     try {
//       const verificationId = await auth.signInWithPhoneNumber(phone);
//       res.status(200).json({ verificationId });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.status(424).json({ message: "Invalid method!" });
//   }
// }
