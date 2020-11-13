const {Model, DataTypes}  = require('sequelize');

class User extends Model{
  static init(connection){ // recebe conezxao comm base de dados
    super.init({ //chama a classe model com metodo init
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.DATEONLY,
      gender: DataTypes.STRING,
    },{
      sequelize: connection
    })
  }
}

module.exports = User;
