import { auth } from "../../firebase";

// POST /api/auth/verify
export default async function handler(req, res) {
  const { verificationId, code } = req.body;

  if (req.method === "POST") {
    // Verify the SMS verification code
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      const userCredential = await auth().signInWithCredential(credential);

      // Create the user account in MongoDB
      // ...

      res.status(200).json({ user: userCredential.user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(424).json({ message: "Invalid method!" });
  }
}
