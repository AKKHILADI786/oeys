const express=require('express')

const expressSession=require('express-session')
const { db } =require('./database/models')
const app=express()
const PORT=process.env.PORT||4444;


// for multer 


app.use(expressSession({
    resave:true,
    saveUninitialized:true,
    secret:'asfdasdfasdfsdfasdwqer'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/public'))
app.use('/user',require('./routes/users/user').uroute)
app.use('/dealer',require('./routes/dealers/dealer').droute)
app.use('/product',require('./routes/product/product').proute)

db.sync()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server started at http://localhost:${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })



