'use strict';

module.exports = { // cria as tabelas no banco de dados com as especificações abaixo
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age:{
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      gender:{
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('users');

  }
};
