import TicketModel from '@/database/models/ticket'
import createEvent from '@/database/operations/event/createEvent'
import { EventPayload, MutationCreateEventArgs } from '@/generated/graphql'

export default async (
  _: unknown,
  args: MutationCreateEventArgs,
): Promise<EventPayload> => {
  try {
    const event = await createEvent(args.input)
    if (event) {
      const ticketInput = args.input.tickets.map((ticket) => {
        return {
          ...ticket,
          availableTickets: ticket.quantity,
          event: event._id,
        }
      })
      const ticket = await TicketModel.insertMany(ticketInput)
      const eventData = {
        ...event,
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
