const Sequelize  = require('sequelize');

const User = require('../models/User');
const Tracking = require('../models/Tracking');
const Product = require('../models/Product');

const db_config = require('../configs/database');

const connection = new Sequelize(db_config);

User.init(connection);
Tracking.init(connection);
Product.init(connection);

User.associate(connection.models);
Tracking.associate(connection.models);
Product.associate(connection.models);

module.exports = connection;