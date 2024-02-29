import { User } from "@/generated/graphql";
import { GraphQLObjectType, GraphQLString } from "graphql";

export type IGetUserAuthInfoRequest = {
  user: User; // or any other type
} & Request
export type IAuthRequest = IGetUserAuthInfoRequest & {
  headers: { authorization: string };
};
export type ResolverContext = {
  req: Request;
  res: Response;
  user: Partial<User>;
};

export const Error = new GraphQLObjectType({
  name: "Error",
  fields: () => ({
    message: {
      type: GraphQLString,
    },
    code: {
      type: GraphQLString,
    },
  }),
});
