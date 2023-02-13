import axios from 'axios'

export const accessUrl = process.env.REACT_APP_BASE_API_URL

const instance = axios.create({
  baseURL: accessUrl
})

instance.interceptors.request.use(config => {
  config.headers.Authorization = window.localStorage.getItem('token')
  return config
})

export default instance
