'use strict';

module.exports = { // cria as tabelas no banco de dados com as especificações abaixo
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('gamedata', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      gold_free: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      gold_premium: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      nivel:{
        type: Sequelize.INTEGER, //level atual
        allowNull: false,
        defaultValue: 0
      },
      sublevel:{
        type: Sequelize.INTEGER, // sub level para evoluir
        allowNull: false,
        defaultValue: 1
      },
      upgrade:{
        type: Sequelize.INTEGER,// se esta com upgrade
        allowNull: false,
        defaultValue: 0
      },
      upgrade_started:{
        type: Sequelize.DATE,// data inicial do plano de upgrade

      },
      upgrade_end:{
        type: Sequelize.DATE,// data final do  plano de upgrade

      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  down: async (queryInterface, Sequelize) => { // deleta as tabelas especificadas abaixo
    await queryInterface.dropTable('gamedata');

  }
};
