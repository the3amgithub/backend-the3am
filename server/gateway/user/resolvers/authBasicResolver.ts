import UserModel from '@/database/models/user'
import { generateOtp } from '@/services/OTP'
import { phoneNotExist } from '../error'
import { UserPayload } from '@/generated/graphql'

export default async (
  _: null,
  args: { phone: string },
): Promise<UserPayload> => {
  const user = await UserModel.findOne({ phone: args.phone })
  console.log(user, 'usrrr')
  const userNotExist = phoneNotExist(user)
  if (userNotExist) {
    return {
      error: userNotExist,
    }
  }
  await UserModel.findByIdAndUpdate(
    { _id: user._id },
    {
      otp: generateOtp(),
    },
  )
  return {
    user: user,
  }
}
