
import axios from "axios";

export default class AccountsService {
  static login (email, password) {
    // temp hack until we move accounts into accounts
    return axios.post(`/api/auth`, { email, password })
  }
}
