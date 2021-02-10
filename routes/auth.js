const express = require('express');
const router = express.Router();  
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const {check,validationResult} = require('express-validator/check');
const UserModel = require('../models/UserModel');
const auth = require('../middlewares/auth');
const { selectFields } = require('express-validator/src/select-fields');

router.get('/',auth, async(req,res)=>{
    try {
        const user = await (await UserModel.findById(req.user.id).select('-password')); 
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(); 
    }
});

router.post('/',[
    check('email','Please Enter Valid Email').isEmail(),
    check('password','Please Enter Password').exists()

],async(req,res) =>{
    const errors = validationResult(res);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const {email,password}=req.body;
    try {
        let user = await UserModel.findOne({email});
        if (!user) {
            return res.status(400).json({msg:'User not found with Provided Email'});
         }
         const checkpassword = await bcrypt.compare(password,user.password);
         if (!checkpassword) {
            return res.status(400).json({msg:'Password is Wrong'}); 
         }
         const payload = {
            user: {
                id:user.id
            }
        }
        jwt.sign(payload,config.get('SecretKey'),{
            expiresIn: 36000
        },(err,token)=>{
            if (err) {
                throw err;
            }
            else{
                res.json({token});
            }
        })
    } catch (error) {
        console.log(error,message);
        return res.status(500).json({msg:'Server Error'}); 

    }
});

module.exports = router;