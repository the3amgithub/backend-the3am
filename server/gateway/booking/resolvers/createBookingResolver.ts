import BookingModel from '@/database/models/booking'
import TicketModel from '@/database/models/ticket'
import { MutationCreateBookingArgs } from '@/generated/graphql'

export default async (_: unknown, args: MutationCreateBookingArgs, ctx) => {
  try {
    const userId = ctx.user._id
    const { input } = args
    const createBooking = await Promise.all(
      input.map(async (item) => {
        const ticket = await TicketModel.findById({ _id: item.ticketId })
        const inputData = {
          ...item,
          totalPrice: item.quantity * ticket.price,
          userId,
        }
        const bookingData = await BookingModel.create(inputData)
        if (bookingData) {
          await TicketModel.findByIdAndUpdate(
            { _id: item.ticketId },
            { availableTickets: ticket.availableTickets - item.quantity },
          )
          return bookingData
        } else {
          throw new Error('Something Went Wrong')
        }
      }),
    )
    return createBooking
  } catch (error) {
    throw new Error('An error occurred while processing the booking')
  }
}
