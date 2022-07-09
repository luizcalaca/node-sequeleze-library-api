const createAttendanceModel = (sequelize, DataTypes) => {
  const Reserve = sequelize.define('WriterBooks', {
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

  Attendance.associate = (models) => {
    Attendance.belongsTo(models.Book, {
      foreignKey: 'bookId',
      as: 'book'
    });

    Attendance.belongsTo(models.Writer, {
      foreignKey: 'WriterId',
      as: 'vet'
    });
  }

  return Attendance;
};

module.exports = createAttendanceModel;