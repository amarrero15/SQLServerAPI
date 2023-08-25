const config= require('../config/config');
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database, config.db_user, config.db_password, {
  host: config.db_host,
  port:1433,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cliente= require("./cliente.model")(sequelize, Sequelize);


module.exports = db;