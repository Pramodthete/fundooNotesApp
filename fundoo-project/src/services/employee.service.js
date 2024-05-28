import sequelize, { DataTypes } from '../config/database';
const Employee = require('../models/employee')(sequelize, DataTypes);


//Register new user
export const fetchEmployees = async () => {
    const data = Employee.findAll();
    console.log("----------------------------->>>>")
    return data; 
  };

  //Register new user
export const addEmployee = async (body) => {
    
      const data = await Employee.create(body);
      return data;
    
  };

  export const editEmployee = async (params,body)=>{
    const emp = await Employee.findOne({where:{id:params.id}});
    const data = await emp.update(body);
    return data;
  }

  export const deleteEmployee = async (params)=>{
    const em= await Employee.findOne({where:{id:params.id}});
    em.destroy(em);
    return em;
  }

  export const fetchEmployee = async (params)=>{
    const em= await Employee.findOne({where:{id:params.id}});
    return em;
  }