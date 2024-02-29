import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'

export const SignupInput = new GraphQLInputObjectType({
  name: 'SignupInput',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})
