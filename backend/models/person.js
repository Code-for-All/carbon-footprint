export default (sequelize, Sequelize) => {
  const Person = sequelize.define('person', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: Sequelize.STRING
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