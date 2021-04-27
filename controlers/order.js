const {db,carts, products,orders} =require('../database/models');


async function getorderBydealerId(dealerId){
    const data=await orders.findAll({
        include:[products],
        where:{
            dealerId:dealerId
        }
    })
    return data;
}
async function createOrderProduct(userId,productId,dealerId){
    console.log(userId,productId,dealerId);
    const data=await orders.create({
        userId:userId,
        productId:productId,
        dealerId:dealerId
    })
    return data;
}

async function deleteOrderProductId(productId){
    const data=orders.destroy({
        where:{
            productId:productId
        }
    })
    return data;
}


module.exports={
    createOrderProduct,getorderBydealerId,deleteOrderProductId
}