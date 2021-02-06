const express  = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const {check,validationResult} = require('express-validator/check');

const UserModel = require('../models/UserModel'); 

router.post('/',[
    check('name','Name is Required').not().isEmpty(),
    check('email','Email is Required').isEmail(),
    check('password','Please Enter Password with more then 6 Character').isLength({min:6})

], async (req,res) =>{

   const errors = validationResult(res);
   if (!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array()});
   }
  const{name,email,password}=req.body;
  try {
      let user = await UserModel.findOne({email});
      if (user) {
          return res.status(400).json({msg: "User already Exists with Email Provided"});
      }
      user = new UserModel({
        name,
        email,
        password  
      })
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password,salt);
      await user.save();
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
      
  }
});



module.exports =router;