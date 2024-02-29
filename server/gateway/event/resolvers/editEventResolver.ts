import BookingModel from '@/database/models/booking'
import EventModel from '@/database/models/events'
import TicketModel from '@/database/models/ticket'
import { MutationEditEVentArgs } from '@/generated/graphql'

export default async (_: unknown, args: MutationEditEVentArgs) => {
  try {
    const { input } = args
    const updateEvent = await EventModel.findByIdAndUpdate(
      { _id: input._id },
      input,
      { new: true },
    ).lean()
    if (updateEvent) {
      const ticket = await Promise.all(
        input.tickets.map(async (ticket) => {
          const booking = await BookingModel.findOne({
            ticketId: ticket._id,
          }).lean()
          if (booking) {
            return await TicketModel.findByIdAndUpdate(
              { _id: ticket._id },
              {
                ...ticket,
                event: updateEvent._id,
                availableTickets: ticket.quantity - booking.quantity,
              },
              {
                new: true,
              },
            )
          } else {
            return await TicketModel.findByIdAndUpdate(
              { _id: ticket._id },
              {
                ...ticket,
                event: updateEvent._id,
                availableTickets: ticket.quantity,
              },
              {
                new: true,
              },
            )
          }
        }),
      )
      const eventData = {
        ...updateEvent,
        tickets: ticket,
      }
      return {
        event: eventData,
        error: null,
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}
