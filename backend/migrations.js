
const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');

const config = require('./src/config/db')
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

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
