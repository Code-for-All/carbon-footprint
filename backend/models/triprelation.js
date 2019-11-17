// https://schema.org/Trip
export default (sequelize, Sequelize) => {
  const Triprelation = sequelize.define('triprelation', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    role: { type: Sequelize.STRING }
  },
    {
      freezeTableName: true
    }
  );

  return Triprelation;
}