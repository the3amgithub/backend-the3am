import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql'
import { SignupInput } from './types/SignupInput'
import { UserPayload } from './types/UserPayload'
import signupResolver from './resolvers/signupResolver'
import verifyUserResolver from './resolvers/verifyUserResolver'
import authBasicResolver from './resolvers/authBasicResolver'

export const userMutation = {
  registerUser: {
    type: new GraphQLNonNull(UserPayload),
    args: {
      input: {
        type: SignupInput,
      },
    },
    resolve: signupResolver,
  },
  verifyUser: {
    type: new GraphQLNonNull(UserPayload),
    args: {
      otp: {
        type: GraphQLInt,
      },
      _id: {
        type: GraphQLID,
      },
    },
    resolve: verifyUserResolver,
  },
  authBasic: {
    type: new GraphQLNonNull(UserPayload),
    args: {
      phone: {
        type: GraphQLString,
      },
    },
    resolve: authBasicResolver,
  },
}
