import { GraphQLList, GraphQLNonNull } from 'graphql'
import Booking from './types/Booking'
import BookingInput from './types/BookingInput'
import createBookingResolver from './resolvers/createBookingResolver'
import getBookingsResolver from './resolvers/getBookingsResolver'

export const bookingQuery = {
  getBookings: {
    type: new GraphQLList(Booking),
    resolve: getBookingsResolver,
  },
}
export const bookingMutation = {
  createBooking: {
    type: new GraphQLList(Booking),
    args: {
      input: {
        type: new GraphQLNonNull(new GraphQLList(BookingInput)),
      },
    },
    resolve: createBookingResolver,
  },
}
