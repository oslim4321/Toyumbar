// pages/api/signup.js

import dbConnect from "../../lib/dbConnect";
import Users from "../../models/user";
import jwt from "jsonwebtoken";
import { setCookies } from "cookies-next";
import { createToken } from "../../lib/createToken";
var bcrypt = require("bcryptjs");

export default async function handler(req, res) {
  await dbConnect();

  const { firstName, lastName, phone, password } = req.body;

  try {
    if (req.method === "POST") {
      const userExist = await Users.findOne({ phone });
      console.log(userExist, "ghjk");
      if (userExist)
        return res.status(422).json({ message: "Phone already in use!" });

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const user = await Users.create({
        firstName,
        lastName,
        phone,
        password: hash,
      });
      console.log(user);

      const token = await createToken(user.phone, user._id);
      setCookies("token", token, {
        req,
        res,
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

      res.status(201).json({ user, token });
    } else {
      res.status(424).json({ message: "Invalid method!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
