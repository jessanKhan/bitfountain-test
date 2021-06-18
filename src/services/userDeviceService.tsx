import { ThanosAxiosIntance } from "../config/apiConfig"

type tokenPayload = {
  access_token: string
}
type loadOptions = {
  limit: string
  page: string
  access_token: string
}
type deviceAdd = {
  BrandId: string
  Name: string
  TypeId: string
  Comment: string
  access_token: string
}

const END_POINT = "/overview"
const END_POINT2 = "/devicemodel"

export const DeviceService = {
  fetchModeltype: (payload: tokenPayload) =>
    ThanosAxiosIntance.post(END_POINT + "/modeltype", {
      headers: { authorization: payload.access_token },
    }),
  fetchModelData: (payload: tokenPayload) =>
    ThanosAxiosIntance.post(END_POINT + "/modeldata/Hamilton/Galileo", {
      headers: { authorization: payload.access_token },
    }),
  fetchAllDevices: (payload: loadOptions) =>
    ThanosAxiosIntance.post(
      `/devicetype?limit=${payload.limit}&page=${payload.page}`,
      {
        headers: { authorization: payload.access_token },
      }
    ),
  addDevice: (payload: deviceAdd) =>
    ThanosAxiosIntance.post(END_POINT2, {
      headers: { authorization: payload.access_token },
      BrandId: payload.BrandId,
      Name: payload.Name,
      TypeId: payload.TypeId,
      Comment: payload.Comment,
    }),
}
