import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const Ticket = new GraphQLObjectType({
  name: 'TicketType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    category: {
      type: new GraphQLNonNull(GraphQLString),
    },
    quantity: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    availableTickets: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    price: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})
export default Ticket
