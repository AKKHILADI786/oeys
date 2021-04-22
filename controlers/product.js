const {db,users,dealers,products} =require('../database/models');


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




module.exports={
    createproduct,getproductsBydealerid
}