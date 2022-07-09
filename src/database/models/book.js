const createBookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'books',
  });

  Book.associate = (models) => {
    Book.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
  }

  return Book;
};

module.exports = createBookModel;