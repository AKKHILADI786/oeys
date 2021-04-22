const Sequelize=require('sequelize')

const data=Sequelize.DataTypes

// const db;
// if(process.env.DATABASE_URL){
//     db=new Sequelize(process.env.DATABASE_URL)
//   }
//   else{
//     db=new Sequelize({
//       dialec:'sqlite',
//       storage:__dirname+'/database.db'
//     })
//   }
  

const db=new Sequelize({
    dialect:'sqlite',
    storage:__dirname+'/database.db'
})

if(process.env.DATABASE_URL){
    db=new Sequelize(process.env.DATABASE_URL)
  }


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

const orders=db.define('order',{
    id:ID,
    quantity:{
        type:data.INTEGER(5),
        defaultValue:1
    }
})

const carts=db.define('cart',{
    id:ID
})


users.hasOne(carts)
carts.belongsTo(users)

products.hasMany(carts)
carts.belongsTo(products)

dealers.hasMany(carts)
carts.belongsTo(dealers)


products.hasMany(orders)
orders.belongsTo(products)

dealers.hasMany(orders)
orders.belongsTo(dealers)

users.hasMany(orders)
orders.belongsTo(users)

dealers.hasMany(products)
products.belongsTo(dealers)




module.exports={
    db,users,dealers,products,orders,carts
}