const createWriterModel = (sequelize, DataTypes) => {
  const Writer = sequelize.define('Writer', {
    name: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'vets',
  });

  return Writer;
};

module.exports = createWriterModel;