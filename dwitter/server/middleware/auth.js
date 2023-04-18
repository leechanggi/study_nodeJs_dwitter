import jwt from "jsonwebtoken";
import * as userRep from "../data/auth.js";

const JWT_SECRET_KEY = "CAsSu&XLWAI#KJCsq+HBLfZfv+(4U2mu";
const AUTH_ERROR = { message: "Authentication Error" };

export async function isAuth(req, res, next) {
  const authHeader = req.get("Authorization");
  if (!(authHeader && authHeader.startsWith("Bearer "))) {
    return res.status(401).json(AUTH_ERROR);
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(
    token, //
    JWT_SECRET_KEY, //
    async (error, decoded) => {
      if (error) {
        return res.status(401).json(AUTH_ERROR);
      }
      const user = await userRep.findById(decoded.id);
      if (!user) {
        return res.status(401).json(AUTH_ERROR);
      }
      req.userId = user.id;
      console.log(req.userId);
      next();
    }
  );
}
