const Sequelize  = require('sequelize');
const dbConfig  = require('../config/database');
const User  = require('../models/User');
const Gamedata  = require('../models/Gamedata');

const connection = new Sequelize(dbConfig);

User.init(connection);
Gamedata.init(connection);

Gamedata.associate(connection.models);

module.exports = connection;
