const route = require('express').Router()
const {getcartByuserId,createCartProduct}=require('../../controlers/cart')


route.get('/:userId',async (req,res)=>{
    const data=await getcartByuserId(req.params.userId);
    res.send(data);
})

route.post('/',async (req,res)=>{
    console.log(req.body.userId,req.body.productId,req.body.dealerId);
    const data=await createCartProduct(req.body.userId,req.body.productId,req.body.dealerId);
    res.send(data);
})


module.exports={
    croute:route
}