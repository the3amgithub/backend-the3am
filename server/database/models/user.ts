import { Schema, model } from 'mongoose'

export interface User {
  _id: string
  name: string
  email: string
  phone: string
  otp: number
}

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
    },
  },
  { timestamps: true },
)
const UserModel = model('users', UserSchema)
export default UserModel
