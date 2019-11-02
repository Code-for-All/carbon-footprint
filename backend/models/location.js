/**
 * Locations are locations at a given date and time that, combined with legs, form segments of a route as part of a travel
 * 
 * Users should (at least and for the MVP) be able to set:
 * - a start location and a start date
 * - a end location with a end date (should be eq or less then start date)
 */
export default (sequelize, Sequelize) => {
  const Location = sequelize.define('location', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    latitude: Sequelize.REAL,
    longitude: Sequelize.REAL,
    type: Sequelize.ENUM('Address', 'Airport', 'Harbour', 'Train Station', 'Bus Station', 'Marina', 'Place', 'Venue'),
    nominatimId: Sequelize.BIGINT
  },
    {
      freezeTableName: true
    }
  );

  return Location;
}