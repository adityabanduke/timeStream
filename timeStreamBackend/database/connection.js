const Sequelize = require("sequelize");

const sequelize = new Sequelize("TimeStream", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
