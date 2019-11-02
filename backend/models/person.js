export default (sequelize, Sequelize) => {
  const Person = sequelize.define('person', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING
  },
    {
      freezeTableName: true
    }
  );

  Person.associate = (models) => {
    Person.hasMany(models.travel);
  };

  return Person;
}