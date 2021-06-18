import actionType from "../constants/types"
import { AuthService } from "../../services/authService"

export function login(email: string, password: string) {
  return async (dispatch: any) => {
    dispatch({ type: actionType.LOGIN })
    const payload = {
      email: email,
      password: password,
    }
    console.log(payload)
    try {
      const { data } = await AuthService.login(payload)
      localStorage.setItem("user_data", data)
      window.location.href = "/home"
      return dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: data,
      })
    } catch (ex) {
      return dispatch({
        type: actionType.LOGIN_FAILED,
        payload: ex.response.data,
      })
    }
  }
}
export function logout() {
  return async (dispatch: any) => {
    console.log("Logout")
    dispatch({ type: actionType.LOGOUT })
  }
}
export function productPageChange(page: string) {
  return (dispatch: Function) => {
    dispatch({ type: actionType.DEVICE_PAGE_CHANGE, payload: page })
  }
}
