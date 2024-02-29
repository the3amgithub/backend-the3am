import userFindOne from "@server/Database/operations/user/userFindOne";
import { User } from "@server/generated/graphql";

export default async (_: unknown, args: null, ctx): Promise<User> => {
  const user = await userFindOne({ _id: ctx.user._id });
  return user;
};
