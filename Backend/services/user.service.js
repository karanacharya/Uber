const userModel = require('../models/user.model');




// This function only does one thing it create a User;
module.exports.createUser = async({
    firstname,lastname,email,password
})=>{
    if(!firstname || !email || !password){
        
        throw new Error('All the fileds are required')
    }

    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })

    return user
}