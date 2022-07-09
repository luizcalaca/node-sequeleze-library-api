'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('attendances',
    [
      {
        book_id: 1,
        writer_id: 2,
      },
      {
        book_id: 1,
        writer_id: 4,
      },
      {
        book_id: 6,
        writer_id: 2,
      },
      {
        book_id: 3,
        writer_id: 8,
      },
      {
        book_id: 3,
        writer_id: 6,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};