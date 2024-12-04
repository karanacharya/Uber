const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
             type:String,
             required:true,
             minlength:[ 3 ,'First name should be atleast 3 characters or long..'],
        },

         lastname:{
            type:String,
            minlength:[3,'Last name should be atleast 3 characters long'],
         }
    },
    

    email:{
        type:String,
        required: true,
        unique:true,
        minlength:[5,"email should be atleast 5 characters long"],
    },

    password:{
        type:String,
        required:true,
        select:false,
        
    },

    socketId:{
        type:String,
    },

})

//Method to generate Auth token using json web token
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}

//Method to compare the passwords. 
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}


//Method to securely hash a user's password before storing it in a database
userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const userModel =mongoose.model('user', userSchema);

module.exports= userModel;