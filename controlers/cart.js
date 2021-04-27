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
    console.log(userId,productId,dealerId);
    const data=await carts.create({
        userId:userId,
        productId:productId,
        dealerId:dealerId
    })
    return data;
}

module.exports={
    createCartProduct,getcartByuserId

}