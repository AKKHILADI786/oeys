const route = require('express').Router()
const {getcartByuserId,createCartProduct,deleteCartProductbyId,deleteCartUserbyId}=require('../../controlers/cart')


route.post('/d',async (req,res)=>{
    const data=await deleteCartProductbyId(req.body.productId);
    res.status(200);
})

route.post('/u',async (req,res)=>{
    const data=await deleteCartUserbyId(req.body.userId);
    res.status(200);
})

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




