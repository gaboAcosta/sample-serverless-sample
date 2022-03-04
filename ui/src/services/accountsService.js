

import Requests from "../utils/requests"
const axios = Requests.getAxios()


export default class AccountsService {
  static getAccounts () {
    return axios.get('/api/accounts')
  }
  static updateAccount (accountId, account) {
    return axios.put(`/api/accounts/${accountId}`, { ...account })
  }
  static createAccount (account) {
    return axios.post(`/api/accounts`, { ...account })
  }
  static deleteAccount (accountId) {
    return axios.delete(`/api/accounts/${accountId}`)
  }
}
