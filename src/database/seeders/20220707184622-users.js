'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        email: 'leonardo@hotmail.com',
        password_hash: '999999999',
        name: 'Léo',
        phone: '123',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        email: 'paula@hotmail.com',
        password_hash: '999999999',
        name: 'paula',
        phone: 'asdf9087asdf',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        email: 'Pedro@hotmail.com',
        password_hash: '546a5s4df',
        name: 'Pedro',
        phone: '55 65498 651687',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        email: 'leonardo@hotmail.com',
        password_hash: '999999999',
        name: 'Léo',
        phone: '123',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        email: 'marcos@hotmail.com',
        password_hash: '9#$%SADFG#$',
        name: 'Marcos',
        phone: '62 9654845654',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};