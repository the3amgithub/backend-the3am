import EventModel from "@/database/models/events"

const getEvents=async()=>{
return await EventModel.find().sort({date:1}).lean()
}
export default getEvents