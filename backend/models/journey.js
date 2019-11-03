export default (sequelize, Sequelize) => {
  const Journey = sequelize.define('journey', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: Sequelize.STRING,
    
  },
    {
      freezeTableName: true
    }
  );

  Journey.associate = (models) => {
    Journey.belongsTo(models.person); // The person journeying
    Journey.hasMany(models.travel);
  };

  return Journey;
}