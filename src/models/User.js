const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },{
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.Tracking,{ foreignKey:'user_id',as:'trackings'});
  }
}

module.exports = User;