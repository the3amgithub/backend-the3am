import { GraphQLObjectType, GraphQLString } from "graphql";
import { User } from "./User";
import ErrorType from "@/gateway/event/types/Error";

export const UserPayload = new GraphQLObjectType({
  name: "UserPayload",
  fields: () => ({
    user: {
      type: User,
    },
    token: {
      type: GraphQLString,
    },
    error: {
      type: ErrorType,
    },
  }),
});
