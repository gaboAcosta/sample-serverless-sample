
module.exports = {
  username: process.env.MYSQL_USER || 'admin',
  password: process.env.MYSQL_PASSWORD || 'admin',
  database: 'enventario_local',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  dialect: 'mysql'
}
