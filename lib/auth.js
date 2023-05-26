import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!decoded) return res.json("invalid token here");

    req.user = decoded;
    // next();
  } catch (err) {
    console.log(err, "meee");
    return res.status(401).json({ message: "Invalid token" });
  }
};
