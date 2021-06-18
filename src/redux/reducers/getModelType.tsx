import actionType from "../constants/types"

const initialState = {
  isLoading: true,
  data: {},
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionType.FETCH_TYPE_START:
      return {
        ...state,
        isLoading: true,
      }

    case actionType.FETCH_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    case actionType.FETCH_TYPE_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }

    default:
      return state
  }
}
