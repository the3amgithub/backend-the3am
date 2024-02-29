import { User } from "@/database/models/user";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const isEmailExist = (user: User) => {
  if (user) {
    return {
      message: "This email address is already in use",
      code: "auth_email_exists",
    };
  }
};
export const isPhoneExist = (user: User) => {
  if (user) {
    return {
      message: "Phone number already exist, please Login",
      code: "auth_phone_exists",
    };
  }
};
export const phoneNotExist = (user: User) => {
  if (!user) {
    return {
      message: "Phone number didn't exist, please Signup to continue",
      code: "auth_phone_not_exists",
    };
  }
};

export const isValidPhone = (phone: string) => {
  const test = phone.match(phoneRegExp);
  if (!test || phone.length !== 10) {
    return {
      message: "Invalid Phone Number",
      code: "invalid_phone",
    };
  }
};
