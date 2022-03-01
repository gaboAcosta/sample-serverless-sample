
import axios from "axios";
import { getToken } from "./session"

export default class Requests {
  static getAxios () {
    const token = getToken()
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios
  }
}
