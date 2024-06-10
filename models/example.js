const { modal, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../config/connection");

class Example extends modal {}

Example.init(
  {
    id: {
      type: DataTypes,
      INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // fill in the rest this is just a basic set up
    },
  },
  {
    sequelize,
    modelName: "example",
  }
);

module.exports = Example;
