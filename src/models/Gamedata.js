
const {Model, DataTypes}  = require('sequelize');

class Gamedata extends Model{
  static init(connection){ // recebe conezxao comm base de dados
    super.init({ //chama a classe model com metodo init
      gold_free: DataTypes.INTEGER,
      gold_premium: DataTypes.INTEGER,
      nivel: DataTypes.INTEGER,
      sublevel: DataTypes.INTEGER,
      upgrade: DataTypes.INTEGER,
      upgrade_started: DataTypes.DATE,
      upgrate_end: DataTypes.DATE,
    },{
      sequelize: connection
    })
  }

  static associate(models){
    this.belongsTo(models.User, {foreignKey:'user_id', as:'user'});
  }
}

module.exports = Gamedata;
