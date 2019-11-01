export default (sequelize, DataTypes) => {
  const Travel = sequelize.define('travel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Description: DataTypes.STRING
  },
    {
      freezeTableName: true,
    }
  );

  Travel.associate = (models) => {
    Travel.belongsTo(models.person);
  };

  return Travel;
}