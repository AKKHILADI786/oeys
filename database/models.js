const Sequelize=require('sequelize')
const data=Sequelize.DataTypes


const db=new Sequelize({
    dialect:'sqlite',
    storage:__dirname+'/database.db'
})

const ID={
    type:data.INTEGER,
    primaryKey:true,
    autoIncrement:true
}

const users=db.define('user',{
    id:ID,
    name:{
        type:data.STRING(50),
        allowNull:false,
    },
    username:{
        type:data.STRING(20),
        allowNull:false,
        unique: true
    },
    password:{
        type:data.STRING(40),
        allowNull:false
    },
    email:{
        type:data.STRING(20),
        allowNull:false
    },
    phone:{
        type:data.STRING(10)
    },
    address:{
        type:data.STRING(300)
    },
    city:{
        type:data.STRING(40)
    },
    state:{
        type:data.STRING(40)
    },
    pincode:{
        type:data.STRING(6)
    }
})


const dealers=db.define('dealer',{
    id:ID,
    name:{
        type:data.STRING(50),
        allowNull:false,
    },
    username:{
        type:data.STRING(20),
        allowNull:false,
        unique: true
    },
    password:{
        type:data.STRING(40),
        allowNull:false
    },
    pan:{
        type:data.STRING(40),
        allowNull:false
    },
    gst:{
        type:data.STRING(40),
        allowNull:false
    },
    email:{
        type:data.STRING(20),
        allowNull:false
    },
    phone:{
        type:data.STRING(10)
    },
    address:{
        type:data.STRING(300)
    },
    city:{
        type:data.STRING(40)
    },
    state:{
        type:data.STRING(40)
    },
    pincode:{
        type:data.STRING(6)
    }
})

const products=db.define('product',{
    id:ID,
    name:{
        type:data.STRING(50),
        allowNull:false,
    },
    type:{
        type:data.STRING(20),
        allowNull:false,
    },
    subtype:{
        type:data.STRING(40),
        allowNull:false
    },
    price:{
        type:data.INTEGER,
        allowNull:false
    },
    quantity:{
        type:data.INTEGER
    },
    description:{
        type:data.STRING(500)
    },
    image:{
        type:data.STRING(40)
    }
})




module.exports={
    db,users,dealers,products
}