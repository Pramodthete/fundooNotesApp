'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee.init(
    {
      name:   DataTypes.STRING,
      gender: DataTypes.STRING,
      department:DataTypes.STRING,
      salary:DataTypes.STRING,
      startdate:{
        type:DataTypes.DATE,
        defaultValue:Sequelize.NOW
      }
    },
    {
      sequelize,
      modelName: 'employee'
    }
  );
  return employee;
};
