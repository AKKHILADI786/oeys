const route = require('express').Router()
const { createuser, getuser, getbyusername } = require('../../controlers/users')


route.get('/', async (req, res) => {
    const data = await getuser();
    res.status(201).send(data);
})

route.get('/:user', async (req, res) => {
    const data = await getbyusername(req.params.user);
    res.status(200).send(data);
})

route.post('/', async (req, res) => {


    const data = await createuser(req.body.name, req.body.username, req.body.password, req.body.email, req.body.phone, req.body.address, req.body.city, req.body.state, req.body.pincode)
    res.status(200).send(data);


})

module.exports = {
    uroute: route
}