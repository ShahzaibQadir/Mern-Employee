const mongoose = require('mongoose');

const EmpSchema =mongoose.Schema({
     user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    name:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    phone:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    salary:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default : Date.now
    }
    

});
module.exports = mongoose.model('employee',EmpSchema); 
