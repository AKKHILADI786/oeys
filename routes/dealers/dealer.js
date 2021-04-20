const route = require('express').Router()

const { createdealer, getdealer, getbyusername } = require('../../controlers/dealers')



route.get('/', async (req, res) => {
    const data = await getdealer();
    res.status(201).send(data);
})


route.post('/login',async (req,res)=>{
    const data=await getbyusername(req.body.username);
    console.log(data)
    if(Object.keys(data).length === 0){
        return res.send({
            Error:'Enter valid username'
        })
    }
    if(data[0].password!=req.body.password){
        return res.send({
            Error:'Password not match'
        })
    }
    req.session.user=data[0].id;
    
    console.log(req.session.user)
    res.send(data);
})
route.get('/islogin',async (req,res)=>{
    if(req.session.user){
        res.send(true)
    }
    else{
        res.send(false)
    }
})
route.get('/logout',async (req,res)=>{
    req.session.user=null;
    console.log('logout')
    res.send(true)
})
route.post('/', async (req, res) => {


    const data = await createdealer(req.body.name, req.body.username, req.body.password, req.body.email, req.body.phone, req.body.address, req.body.city, req.body.state, req.body.pincode,req.body.pan,req.body.gst)
    res.status(200).send(data);


})

route.get('/:user', async (req, res) => {
    const data = await getbyusername(req.params.user);
    res.status(200).send(data);
})

module.exports = {
    droute: route
}