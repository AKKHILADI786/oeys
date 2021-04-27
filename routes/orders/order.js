const route = require('express').Router()
const {createOrderProduct,deleteOrderProductId,getorderBydealerId}=require('../../controlers/order')


route.get('/:dealerId',async (req,res)=>{
    const data=await getorderBydealerId(req.params.dealerId);
    res.send(data);
})

route.post('/',async (req,res)=>{
    console.log(req.body.userId,req.body.productId,req.body.dealerId);
    const data=await createOrderProduct(req.body.userId,req.body.productId,req.body.dealerId);
    res.send(data);
})
route.post('/d',async (req,res)=>{
    const data=await deleteOrderProductId(req.body.productId);
    res.status(200);
})

module.exports={
    oroute:route
}
