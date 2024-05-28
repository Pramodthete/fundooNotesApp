import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import { newEmployeeValidator } from '../validators/employee.validator';
import { adminAuth } from '../middlewares/auth.middleware';
// import { employeeAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// get all employees
router.get('/getAll',adminAuth, employeeController.getEmployees);

router.get('/:id',adminAuth,employeeController.getEmployee);

//route to create a new employee
router.post('/',adminAuth, newEmployeeValidator, employeeController.addEmployee); //validater used before here

router.put('/:id', adminAuth, employeeController.updateEmployee);

router.delete('/:id', adminAuth,employeeController.removeEmployee);

export default router;
