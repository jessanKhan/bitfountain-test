import actionType from "../constants/types"

const initialState = {
  isLoading: true,
  data: {},
  loggedIn: false,
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionType.LOGIN:
      return {
        ...state,
        isLoading: true,
      }

    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedIn: true,
        data: action.payload,
      }

    case actionType.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    case actionType.LOGOUT:
      return {
        ...state,
        isLoading: false,
        loggedIn: false,
        data: {},
      }
    default:
      return state
  }
}
