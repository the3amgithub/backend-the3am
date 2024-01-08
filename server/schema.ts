import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'

const userQuery = {
  me: {
    type: GraphQLString,
    resolve: () => 'Hey Worlddd',
  },
}
const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...userQuery,
    // ...adminQuery,
  },
})
// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     ...userMutation,
//     // ...adminMutation,
//   },
// })

export const schema = new GraphQLSchema({
  query,
})
