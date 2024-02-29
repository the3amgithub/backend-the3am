import EventModel, { Event } from '@/database/models/events'

const createEvent = async (input): Promise<Event> => {
  return await EventModel.create(input).then((data) => {
    return data.toJSON()
  })
}
export default createEvent
