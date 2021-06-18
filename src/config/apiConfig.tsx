import axios from "axios"

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Request-ID": 124,
  "X-Country-Code": "BD",
  "X-Client-Name": "CRM",
  "X-Client-Version": 123,
}

export const ThanosAxiosIntance = axios.create({
  baseURL: "http://163.47.115.230:30000/api/",
  headers,
  timeout: 3000,
})
