

import Requests from "../utils/requests"
const axios = Requests.getAxios()


export default class UsersService {
  static getUsers () {
    return axios.get('/api/users')
  }
  static updateUser (userId, user) {
    return axios.put(`/api/users/${userId}`, user)
  }
  static createUser (user) {
    // temp hack until we move users into users
    return axios.post(`/api/users`, { ...user, userId: 1 })
  }
  static deleteUser (userId) {
    return axios.delete(`/api/users/${userId}`)
  }
}
