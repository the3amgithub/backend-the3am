import UserModel from '@/database/models/user'
import { verifyOtp } from '@/services/OTP'
import { signToken } from '@/services/authJwt'

export default async (_: null, args: { otp: number; _id: string }) => {
  const findUser = await UserModel.findById({ _id: args._id })
  if (!findUser) {
    return {
      error: { message: 'Invalid User', code: 'invalid_account' },
    }
  }
  const otpVerification = verifyOtp(args.otp)
  if (otpVerification) {
    const token = signToken(findUser)
    return {
      user: findUser,
      token,
    }
  } else {
    return {
      error: {
        message: 'Invalid OTP',
        code: 'invalid_otp',
      },
    }
  }
}
