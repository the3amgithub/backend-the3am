import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'
import { GraphQLDate } from 'graphql-scalars'
export const EventTicketInput = new GraphQLInputObjectType({
  name: 'EventTicketInput',
  fields: () => ({
    quantity: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    price: {
      type:new GraphQLNonNull(GraphQLInt),
    },
    category: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})
const EventInput = new GraphQLInputObjectType({
  name: 'EventInput',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    location: {
      type: new GraphQLNonNull(GraphQLString),
    },
    date: {
      type: new GraphQLNonNull(GraphQLDate),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    banner: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tableLayout: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tickets: {
      type: new GraphQLList(EventTicketInput),
    },
  }),
})
export default EventInput
