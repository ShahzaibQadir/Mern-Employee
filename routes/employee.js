const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const UserModel = require('../models/UserModel');
const EmpModel = require('../models/EmployeeModel');
const auth = require('../middlewares/auth');

//Show all Employee Yaha se Hoge
router.get('/',auth, async (req,res) => {
    try {
        const employees =await EmpModel.find({user:req.user.id}).sort({date: -1});
        res.json(employees);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error'); 
    }
});


//Save All Employee
router.post('/',[auth,
    check('name', 'Name is required').not().isEmpty(),
    check('email','Email is Required').isEmail(),
    check('designation', 'Designation is required').not().isEmpty() 
],async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
        }
        const {name,email,phone,designation,salary} = req.body;
        try {
            const newEmp = new EmpModel({
                email,
                name,
                phone,
                designation,
                salary,
                user: req.user.id

            });
            const savedemp = await newEmp.save();
            res.json(savedemp);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
});


//Edit All Employee
router.put('/:id',auth, async(req,res) => {
    const {name,email,phone,designation,salary}=req.body;
    const empfields ={};
    if (name) empfields.name = name;
    if (email) empfields.email = email;
    if (designation) empfields.designation = designation;
    if (salary) empfields.salary = salary;
    if (phone) empfields.phone = phone; 
    try {
        let employee = await EmpModel.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({msg: 'Employee not found..'})
         }
        employee = await EmpModel.findByIdAndUpdate(req.params.id,{
             $set: empfields
        },{new:true});
        res.json(employee); 
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error"); 
    }
});

//delete Employee
router.delete('/:id',auth, async(req,res) => {
    try {
        let emp = await EmpModel.findById(req.params.id);
        if(!emp){
            return res.status(401).json({msg: 'Employee not found'});
        }
        await EmpModel.findByIdAndRemove(req.params.id);
        res.json({msg:'Employee Deleted'}); 
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;




