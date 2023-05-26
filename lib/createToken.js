import jwt from "jsonwebtoken";

export const createToken = (phone, id) => {
  return jwt.sign({ phone, id }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
