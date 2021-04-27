const {db,users,dealers,products} =require('../database/models');
const { Op } = require("sequelize");

async function createproduct(name,type,subtype,price,quantity,description,image,dealerId){
    
    
   const data= await products.create({
        name,
        type,
        subtype,
        price,
        quantity,
        description,
        dealerId,
        image
     })
     return data;
}

async function getproductsBydealerid(dealerId){
    const data=await products.findAll({
        include:[dealers],
        where:{
            dealerId:dealerId
        }
    })
    return data;
}

async function getByType(type){
    const data=await products.findAll({
        where:{
            [Op.or]:[
                {type:type},
                {subtype:type}
            ]
        }
    })
    return data;
}

async function getbyproductid(productId){
    const data=products.findByPk(productId)
    return data;
}



module.exports={
    createproduct,getproductsBydealerid,getByType,getbyproductid
}