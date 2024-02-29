import UserModel from "@/database/models/user";
import { User } from "@/generated/graphql";


export default async (_: unknown, args: null, ctx): Promise<User> => {
  const user = await UserModel.findOne({ _id: ctx.user._id }).lean();
  return user;
};
