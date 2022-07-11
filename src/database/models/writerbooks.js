const createAttendanceModel = (sequelize, DataTypes) => {
  const WriterBook = sequelize.define('WriterBook', {
    bookId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    WriterId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    underscored: true,
    tableName: 'writers_books',
    timestamps: false
  });

  WriterBook.associate = (models) => {
    WriterBook.belongsTo(models.Book, {
      foreignKey: 'bookId',
      as: 'book'
    });

    WriterBook.belongsTo(models.Writer, {
      foreignKey: 'writerId',
      as: 'writer'
    });
  }

  return WriterBook;
};

module.exports = createAttendanceModel;