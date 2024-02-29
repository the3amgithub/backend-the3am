import { Schema, model } from 'mongoose'

export interface Event {
  _id: string
  name: string
  location: string
  date: Date
  description: string
  banner: string
  tableLayout: string
}

const EventSchema = new Schema<Event>(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    tableLayout: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

const EventModel = model('events', EventSchema)
export default EventModel
