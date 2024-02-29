import EventModel from '@/database/models/events'

export default async (_: unknown, args: { id: string }) => {
  const event = await EventModel.findById({ _id: args.id }).lean()
  return event
}
