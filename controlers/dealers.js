const {db,users,dealers} =require('../database/models');



async function createdealer(name,username,password,email,phone,address,city,state,pincode,pan,gst){
   
    const data=await dealers.create({
        name,username,password,email,phone,address,city,state,pincode,pan,gst
    },{
        ignoreDuplicates:true
    })
    return data;
}

async function getdealer(){
    const data=await dealers.findAll({});
    return data;
}

async function getbyusername(username){
    const data=await dealers.findAll({
        where:{
            username:username
        }
    })
    return data;
}

module.exports={
    createdealer,
    getdealer,
    getbyusername
}