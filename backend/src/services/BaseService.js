
class BaseService {
  constructor(ServiceFactory) {
    this.serviceFactory = ServiceFactory
    this.models = {}
  }
  async getService (serviceName) {
    const service = await this.serviceFactory.getService(serviceName)
    if(!service) throw new Error(`Error loading service ${serviceName}`)
    return service
  }
  setModel (model) {
    this.models[model.name] = model
  }
  getModel (modelName) {
    const model = this.models[modelName]
    if (!model) throw new Error(`Unable to load model ${modelName}`)
    return model
  }
}

module.exports = BaseService
