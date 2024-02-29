import { Schema, Types, model } from 'mongoose'

export interface Booking {
  _id: string
  userId: Types.ObjectId
  eventId: Types.ObjectId
  ticketId: Types.ObjectId
  quantity: number
  totalPrice: number
}

const BookingSchema = new Schema<Booking>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'events',
    },
    ticketId: {
      type: Schema.Types.ObjectId,
      ref: 'tickets',
    },
    quantity: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
  },
  { timestamps: true },
)
const BookingModel = model('bookings', BookingSchema)
export default BookingModel
