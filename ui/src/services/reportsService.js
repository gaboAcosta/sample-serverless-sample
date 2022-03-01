
import pieData from "./samples/pie.json"
import historyData from "./samples/history.json"

export default class ReportsService {
  static async getDataForPie () {
    return {
      data: pieData
    }
  }
  static async getDataForHistory () {
    return {
      data: historyData
    }
  }
}
