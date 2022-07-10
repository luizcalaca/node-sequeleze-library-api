const createWriterModel = (sequelize, DataTypes) => {
  const Writer = sequelize.define('Writer', {
    name: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'writers',
  });

  return Writer;
};

module.exports = createWriterModel;