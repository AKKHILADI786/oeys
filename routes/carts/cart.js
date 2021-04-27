const route = require('express').Router()
const {getcartByuserId,createCartProduct}=require('../../controlers/cart')


route.get('/:userId',async (req,res)=>{
    const data=await getcartByuserId(req.params.userId);
    return data;
})

route.post('/',async (req,res)=>{
    const data=await createCartProduct(req.body.userId,req.body.productId,req.body.dealerId);
    return data;
})


module.exports={
    croute:route
}