import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'

const userQuery = {
  userInfo: {
    type: GraphQLString,
    resolve: () => {
      return 'Hey Query is working'
    },
  },
}
const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...userQuery,
  },
})

export const schema = new GraphQLSchema({
  query,
})
