import { contactMutation, contactQuery } from './gateway/contact/schema'
import { bookingMutation, bookingQuery } from './gateway/booking/schema'
import { userMutation } from './gateway/user/schema'
import { eventMutation, eventQuery } from './gateway/event/schema'
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
    ...eventQuery,
    ...bookingQuery,
    ...contactQuery,
    // ...adminQuery,
  },
})
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...eventMutation,
    ...userMutation,
    ...bookingMutation,
    ...contactMutation,
  },
})

export const schema = new GraphQLSchema({
  query,
  mutation,
})
