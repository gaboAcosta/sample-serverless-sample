
const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');

const config = {
  username: process.env.MYSQL_USER || 'admin',
  password: process.env.MYSQL_PASSWORD || 'admin',
  database: 'sample-serverless-project',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  dialect: 'mysql',
  port: 3306
}
const sequelize = new Sequelize(config);
async function migrate () {
  // Checks migrations and run them if they are not already applied. To keep
  // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
  // will be automatically created (if it doesn't exist already) and parsed.
  try {
    console.log('Running migrations!', config)
    const result = await umzug.up();
    console.log('Migrations finished!', result)
  } catch (err) {
    console.trace(err)
    throw err
  }
}

const umzug = new Umzug({
  migrations: { glob: 'src/migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

module.exports = {
  migrate
}
