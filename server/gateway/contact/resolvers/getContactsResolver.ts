import ContactModel from "@/database/models/contact"

export default async()=>{
    const contacts = await ContactModel.find().lean()
    return contacts[0]
}