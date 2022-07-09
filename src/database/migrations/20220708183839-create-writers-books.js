'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('writers_books', { 
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'book_id',
        references: {
          model: 'books',
          key: 'id',
        },
        primaryKey: true,
      },
      vetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'writer_id',
        references: {
          model: 'writers',
          key: 'id',
        },
        primaryKey: true,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('attendances');
  }
};