import actionType from "../constants/types"

const initialState = {
  isLoading: true,
  data: {},
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionType.ADD_DEVICE:
      return {
        ...state,
        isLoading: true,
      }

    case actionType.ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    case actionType.ADD_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }

    default:
      return state
  }
}
