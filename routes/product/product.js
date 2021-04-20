const route = require('express').Router()
const multer=require('multer')

const upload=multer({dest:'uploads/'})
const{}=require('../../controlers/product')

const {products}=require('../../database/models')
const fs=require('fs').promises

route.get('/',async (req,res)=>{
    res.send('jai shree ram')
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
    const data = await products.create({
       name:req.body.name,
       type:req.body.type,
       subtype:req.body.subtype,
       price:req.body.price,
       quantity:req.body.quantity,
       description:req.body.description,
       image: '/images/'+req.body.name+'.'+req.file.mimetype.split('/').pop()
    })
    res.redirect('/')
})


module.exports={
    proute:route
}