import EventModel from '@/database/models/events'
import TicketModel from '@/database/models/ticket'
import UserModel from '@/database/models/user'
import Event from '@/gateway/event/types/Event'
import Ticket from '@/gateway/ticket/types/Ticket'
import { User } from '@/gateway/user/types/User'
import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql'

const Booking = new GraphQLObjectType({
  name: 'BookingType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user: {
      type: new GraphQLNonNull(User),
      resolve: async (src) =>
        await UserModel.findById({ _id: src.userId }).lean(),
    },
    event: {
      type: new GraphQLNonNull(Event),
      resolve: async (src) =>
        await EventModel.findById({ _id: src.eventId }).lean(),
    },
    ticket: {
      type: new GraphQLNonNull(Ticket),
      resolve: async (src) =>
      await TicketModel.findById({ _id: src.ticketId }).lean(),
    },
    quantity: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    totalPrice: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})
export default Booking
