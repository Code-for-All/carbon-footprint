export default (sequelize, DataTypes) => {
  const Person = sequelize.define('person', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: DataTypes.STRING
  },
    {
      freezeTableName: true,
    }
  );

  Person.associate = (models) => {
    Person.hasMany(models.travel);
  };

  return Person;
}