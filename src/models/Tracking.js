const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Tracking extends Model {
  static init(sequelize){
    super.init({
      code: DataTypes.STRING,
      local: DataTypes.STRING,
    },{
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.User,{ foreignKey:'user_id',as:'users'});
    this.hasMany(models.Product,{foreignKey:'tracking_id',as:'product'})
  }
}

module.exports = Tracking;