const {db,users,dealers,carts} =require('../database/models');


async function getcartByuserId(userId){
    const data=await carts.findAll({
        where:{
            userId
        }
    })
    return data;
}
async function createCartProduct(userId,productId,dealerId){
    const data=await carts.create({
        userId,
        productId,
        dealerId
    })
    return data;
}

module.exports={
    createCartProduct,getcartByuserId

}