import HttpStatus from 'http-status-codes';
import * as EmployeeService from '../services/employee.service';


export const getEmployees = async (req, res, next) => {
    try {
      const data = await EmployeeService.fetchEmployees();
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Employees fetch successfully'
      });
    } catch (error) {
      next(error);
    }
};

export const addEmployee = async (req, res, next) => {
  try{
    const data = await EmployeeService.addEmployee(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code:HttpStatus.ACCEPTED,
      data:data,
      message:'Employee Registration successful'
    })
  }catch(error){
    next(error);
  }
}

export const updateEmployee  = async (req, res, next) => {
  try{
    const data = await EmployeeService.editEmployee(req.params,req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code:HttpStatus.ACCEPTED,
      data:data,
      message: `Employee Updated Successfully`
    })
  }catch(error){
    next(error);
  }
}

export const removeEmployee  = async (req, res, next) => {
  try{
    const data = await EmployeeService.deleteEmployee(req.params);
    res.status(HttpStatus.ACCEPTED).json({
      code:HttpStatus.ACCEPTED,
      data:data,
      message: `Employee Deleted Successfully`
    })
  }catch(error){
    next(error);
  }
}

export const getEmployee  = async (req, res, next) => {
  try{
    const data = await EmployeeService.fetchEmployee(req.params);
    res.status(HttpStatus.ACCEPTED).json({
      code:HttpStatus.ACCEPTED,
      data:data,
      message: `Employee Fetched Successfully`
    })
  }catch(error){
    next(error);
  }
}