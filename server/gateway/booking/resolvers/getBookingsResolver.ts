import BookingModel from '@/database/models/booking'

export default async () => {
  const bookings = await BookingModel.find().lean()
  return bookings
}
