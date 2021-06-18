import { takeEvery, call, put, takeLatest } from "redux-saga/effects"
import actionType from "../constants/types"
import { AuthService } from "../../services/authService"

// api call
// export const _requestToApi = function* (action: any) {
//   try {
//     let mail = action.email
//     let pass = action.password

//     const payload = {
//       mail,
//       pass,
//     }
//     console.log(payload)
//     const result = yield AuthService.login(payload).then(
//       (res: any) => {
//         console.log("Response Data", res.data)
//         // return res.data.success === true ? res.data.success : false;
//         if (res.data.success === true) {
//           return res.data
//         } else {
//           return false
//         }
//       },
//       (error: Error) => {
//         console.log(error)
//       }
//     )
//     console.log("result", result)

//     result.success === true
//       ? yield put({
//           type: actionType.AUTH_RESULT,
//           loading: false,
//           count: 1111111,
//           user_data: result.data.user,
//         })
//       : console.log("Login Error password not match")
//   } catch (err) {
//     console.log("Error ", err)
//   }
// }

// generator Func
const _AuthSignIn = function* (action: any) {
  // try {
  //   const api_result = yield call(_requestToApi, action)
  // } catch (err) {
  //   console.log("ERROR Is", err)
  // }
  console.log("Hello")
}

const rootSaga = function* () {
  yield takeEvery(actionType.LOGIN, _AuthSignIn)
}

export default rootSaga
