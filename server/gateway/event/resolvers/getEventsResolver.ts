import getEvents from '@/database/operations/event/getEvent'

export default async () => {
  const currentDate = new Date()
  const events = await getEvents()
  const upcomingEvents = events.filter((item) => item.date >= currentDate).sort((a, b) => (a.date < b.date ? -1 : 1))
  const pastEvents = events
    .filter((item) => item.date < currentDate)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
  return {
    upcomingEvents,
    pastEvents,
  }
}
