import { Schema, Types, model } from 'mongoose'

export interface Ticket {
  _id: string
  event: Types.ObjectId
  category: string
  quantity: number
  availableTickets: number
  price: number
}
const TicketSchema = new Schema<Ticket>({
  event: {
    type: Schema.Types.ObjectId,
    ref: 'events',
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  availableTickets: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})
const TicketModel = model('tickets', TicketSchema)
export default TicketModel
