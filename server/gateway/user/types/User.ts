import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

export const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLString,
    },
  }),
})
