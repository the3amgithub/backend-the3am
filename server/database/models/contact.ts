import { Schema, Types, model } from 'mongoose'

export type Contact = {
  _id: Types.ObjectId
  moreInfo: {
    label: string
    email: string[]
  }
  bookingQuery: {
    label: string
    email: string[]
  }
  conversation: {
    label: string
    email: string[]
  }
}

const ContactSchema = new Schema<Contact>({
  moreInfo: {
    label: {
      type: String,
    },
    email: [{ type: String }],
  },
  bookingQuery: {
    label: {
      type: String,
    },
    email: [{ type: String }],
  },
  conversation: {
    label: {
      type: String,
    },
    email: [{ type: String }],
  },
})
const ContactModel = model('contacts', ContactSchema)
export default ContactModel
