// https://schema.org/Trip
export default (sequelize, Sequelize) => {
  const Trip = sequelize.define('trip', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    arrivalTime: { type: Sequelize.DATE },
    departureTime: { type: Sequelize.DATE },

  },
    {
      freezeTableName: true
    }
  );

  Trip.associate = (models) => {
    Trip.belongsToMany(Trip, { as: 'subTrip', through: models.triprelation, foreignKey: 'SubTripId' });
    Trip.belongsToMany(Trip, { as: 'partOfTrip', through: models.triprelation, foreignKey: 'PartOfTripId' });
  };

  return Trip;
}