import actionType from "../constants/types"
import { DeviceService } from "../../services/userDeviceService"

export function getModelType(access_token: string) {
  return async (dispatch: any) => {
    dispatch({ type: actionType.FETCH_TYPE_START })
    const payload = {
      access_token: access_token,
    }
    console.log(payload)
    try {
      const { data } = await DeviceService.fetchModeltype(payload)
      return dispatch({
        type: actionType.FETCH_TYPE_START,
        payload: data,
      })
    } catch (ex) {
      return dispatch({
        type: actionType.FETCH_TYPE_ERROR,
        payload: ex.response.data,
      })
    }
  }
}

export function getModelData(access_token: string) {
  return async (dispatch: any) => {
    dispatch({ type: actionType.FETCH_MODEL_START })
    const payload = {
      access_token: access_token,
    }
    console.log(payload)
    try {
      const { data } = await DeviceService.fetchModelData(payload)
      return dispatch({
        type: actionType.FETCH_MODEL_SUCCESS,
        payload: data,
      })
    } catch (ex) {
      return dispatch({
        type: actionType.FETCH_MODEL_ERROR,
        payload: ex.response.data,
      })
    }
  }
}

export function getAllDevices(
  limit: string,
  page: string,
  access_token: string
) {
  return async (dispatch: any) => {
    dispatch({ type: actionType.PRODUCT_LOAD_START })
    const payload = {
      limit: limit,
      page: page,
      access_token: access_token,
    }
    console.log(payload)
    try {
      const { data } = await DeviceService.fetchAllDevices(payload)
      return dispatch({
        type: actionType.PRODUCT_LOAD_SUCCESS,
        payload: data,
      })
    } catch (ex) {
      return dispatch({
        type: actionType.PRODUCT_LOAD_ERROR,
        payload: ex.response.data,
      })
    }
  }
}

export function addDevice(
  BrandId: string,
  Name: string,
  TypeId: string,
  Comment: string,
  access_token: string
) {
  return async (dispatch: any) => {
    dispatch({ type: actionType.ADD_DEVICE })
    const payload = {
      BrandId: BrandId,
      Name: Name,
      TypeId: TypeId,
      Comment: Comment,
      access_token: access_token,
    }
    console.log(payload)
    try {
      const { data } = await DeviceService.addDevice(payload)
      return dispatch({
        type: actionType.ADD_SUCCESS,
        payload: data,
      })
    } catch (ex) {
      return dispatch({
        type: actionType.ADD_ERROR,
        payload: ex.response.data,
      })
    }
  }
}

export function productPageChange(page: string) {
  return (dispatch: Function) => {
    dispatch({ type: actionType.DEVICE_PAGE_CHANGE, payload: page })
  }
}
