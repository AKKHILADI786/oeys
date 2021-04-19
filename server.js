const express=require('express')
const { db } =require('./database/models')
const app=express()
const PORT=process.env.PORT||4444;


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/public'))
app.use('/user',require('./routes/users/user').uroute)

db.sync()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server started at http://localhost:${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })



