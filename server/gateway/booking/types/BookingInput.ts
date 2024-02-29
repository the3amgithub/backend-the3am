import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql'

const BookingInput = new GraphQLInputObjectType({
  name: 'BookingInputType',
  fields: () => ({
    eventId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    ticketId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    quantity: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})
export default BookingInput
