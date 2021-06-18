import actionType from "../constants/types"

const initialState = {
  isLoading: true,
  data: {},
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionType.PRODUCT_LOAD_START:
      return {
        ...state,
        isLoading: true,
      }

    case actionType.PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    case actionType.PRODUCT_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }

    default:
      return state
  }
}
