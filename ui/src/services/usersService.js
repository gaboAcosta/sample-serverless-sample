

import Requests from "../utils/requests"
const axios = Requests.getAxios()

export const getUsers = () => {
  return axios.get('/api/users').then((response) => response.data)
}

export const updateUser = (user) => {
  return axios.put(`/api/users/${user.id}`, user)
}

export const createUser = (user) => {
  // temp hack until we move users into users
  return axios.post(`/api/users`, { ...user, userId: 1 })
}

export const deleteUser = (user) => {
  return axios.delete(`/api/users/${user.id}`)
}
