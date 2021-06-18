import { ThanosAxiosIntance } from "../config/apiConfig"

type LoginPyloadType = {
  email: string
  password: string
}

const END_POINT = "login"
export const AuthService = {
  login: (payload: LoginPyloadType) =>
    ThanosAxiosIntance.post(END_POINT, {
      authType: "Credential",
      userType: "InternalUser",
      email: payload.email,
      password: payload.password,
    }),

  logout: () => {
    localStorage.removeItem("user")
  },
}
