
import { IAuthRequest } from "@/gateway/types";
import { User } from "@/generated/graphql";
import jwt from "jsonwebtoken";
export const signToken = (user: User) => {
  const token = jwt.sign(
    {
      user: {
        _id: user._id,
        userName: user.name,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRY }
  );
  return token;
};
export const checkToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
export const parseJwt = async (req: IAuthRequest) => {
    const authorizationHeader = req.headers.authorization
    const token: string =
      authorizationHeader && authorizationHeader.replace('Bearer ', '')
    try {
      const jwtData:any = checkToken(token)
      if (jwtData && jwtData.user) {
        req.user = jwtData.user
      } else {
        req.user = null
      }
    } catch (err) {
      req.user = null
    }
  }