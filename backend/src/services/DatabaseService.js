
const glob = require('glob')
const config = require('../config/db')
const { Sequelize } = require('sequelize')

class DatabaseService {
  constructor() {
    this.initialized = false
    this.db = {}
  }
  getConnection () {
    return new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: config.dialect
    })
  }
  loadModels (connection) {
    const files = glob.sync('src/models/*.js')
    if (!Array.isArray(files) || files.length < 1) {
      throw new Error('No files found on models folder')
    }
    for (const file of files) {
      // since this is run from the root directory we need to replace the src portion
      // of the path with ..
      const filePath = file.replace('src', '..')
      const model = require(filePath)(connection)
      this.db[model.name] = model
    }

    for (const model in this.db) {
      if(typeof model.associate === 'function') {
        model.associate(this.db)
      }
    }
  }
  async initializeDatabase () {
    const connection = this.getConnection()
    await connection.authenticate()
    this.loadModels(connection)
    this.db.connection = connection
    this.initialized = true
  }
  async getModel (modelName) {
    if(this.initialized === false)
      await this.initializeDatabase()
    const model = this.db[modelName]
    if (!model) throw new Error(`Unable to resolve model ${modelName}`)
    return model
  }
}

module.exports = new DatabaseService()

