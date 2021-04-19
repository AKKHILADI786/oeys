const {db,users} =require('../database/models');
const user = require('../routes/users/user');


async function createuser(name,username,password,email,phone,address,city,state,pincode){
   
    const data=await users.create({
        name,username,password,email,phone,address,city,state,pincode
    },{
        ignoreDuplicates:true
    })
    return data;
}

async function getuser(){
    const data=await users.findAll({});
    return data;
}

async function getbyusername(username){
    const data=await users.findAll({
        where:{
            username:username
        }
    })
    return data;
}

module.exports={
    createuser,
    getuser,
    getbyusername
}