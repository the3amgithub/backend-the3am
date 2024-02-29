import { Error } from "@/gateway/types";
import { GraphQLObjectType, GraphQLString } from "graphql";

export const SignupPayload = new GraphQLObjectType({
  name: "SignupPayload",
  fields: () => ({
    message: {
      type: GraphQLString,
    },
    error: {
      type: Error
    },
  }),
});
