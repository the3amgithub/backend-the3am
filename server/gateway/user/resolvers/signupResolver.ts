import { isPhoneExist, isValidPhone } from '../error'
import UserModel from '@/database/models/user'
import { MutationRegisterUserArgs, UserPayload } from '@/generated/graphql'
import { generateOtp } from '@/services/OTP'

export default async (
  _: unknown,
  args: MutationRegisterUserArgs,
): Promise<UserPayload> => {
  const { input } = args
  const isphoneValid = isValidPhone(input.phone)
  if (isphoneValid) {
    return {
      error: isphoneValid,
    }
  }
  const user = await UserModel.findOne({ phone: input.phone })
  const userExist = isPhoneExist(user)
  if (userExist) {
    return {
      error: userExist,
    }
  }
  const registerUser = await UserModel.create({
    phone: input.phone,
    name: input.name,
    email: input.email,
    otp: generateOtp(),
  })
  return {
    user: registerUser,
  }
}
