import axios from './axios'

export const getUsersListApi = ({ perPage, since }) => axios.get(`/users?per_page=${perPage}&since=${since}`)

export const getUserApi = ({ userId }) => axios.get(`/users/${userId}`)
