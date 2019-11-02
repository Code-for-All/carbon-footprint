export default (sequelize, Sequelize) => {
  const Travel = sequelize.define('travel', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    oneway: { type: Sequelize.BOOLEAN, defaultValue: false },
    departedAt: { type: Sequelize.DATEONLY, allowNull: false, defaultValue: Sequelize.NOW },
    arrivedAt: Sequelize.DATEONLY,
    transport: {type: Sequelize.ENUM('Plane', 'Car', 'Bike', 'Foot', 'Bus', 'Train', 'Boat', 'Taxi'), allowNull: false, defaultValue: 'Foot'}
  },
    {
      freezeTableName: true
    }
  );

  Travel.associate = (models) => {
    Travel.belongsTo(models.person); // The person traveling
    Travel.belongsTo(models.location, { as: 'Departure', foreignKey: 'departureLocation' }); // Traveling from location
    Travel.belongsTo(models.location, { as: 'Arrival', foreignKey: 'arrivalLocation' }); // Traveling to location
  };

  return Travel;
}