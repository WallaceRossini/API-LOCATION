const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
    },{
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.Tracking,{ foreignKey:'tracking_id',as:'trackings'});
  }
}

module.exports = Product;