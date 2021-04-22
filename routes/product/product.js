const route = require('express').Router()
const multer=require('multer')

const upload=multer({dest:'uploads/'})
const{createproduct,getproductsBydealerid,getByType}=require('../../controlers/product')

const {products}=require('../../database/models')
const fs=require('fs').promises

route.get('/t/:type',async (req,res)=>{
    const data=await getByType(req.params.type)
    console.log(data);
    res.send(data);
})
route.post('/',upload.single('product'),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const old_path='./uploads/'+req.file.filename;
    const new_path='./images/'+req.body.name+'.'+req.file.mimetype.split('/').pop();

    console.log(old_path)
    console.log(new_path)
    
    await fs.rename(old_path,new_path,()=>{
        // for removing file from upload folder
        try{
            console.log('removing')
            fs.uplink(old_path)
        }
        catch(err){
            console.log(err)
        }
        //
    });
    let image= '/images/'+req.body.name+'.'+req.file.mimetype.split('/').pop();
    const data = await createproduct(req.body.name,req.body.type,req.body.subtype,req.body.price,req.body.quantity,req.body.description,image,req.session.user)
    console.log(data)    
    res.redirect('/')
})

route.get(`/:dealerId`, async (req,res)=>{
    const data= await getproductsBydealerid(req.params.dealerId);
    res.send(data);
})

module.exports={
    proute:route
}