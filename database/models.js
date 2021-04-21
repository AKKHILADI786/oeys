const Sequelize=require('sequelize')
const product = require('../routes/product/product')
const user = require('../routes/users/user')
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



// orders.belongsTo(users)
// users.hasMany(orders)

// dealers.hasMany(products)
// products.belongsTo(dealers)
// orders.belongsTo(dealers)
// dealers.hasMany(orders)


// // products.hasMany(users)
// products.hasOne(dealers)

// orders.hasMany(products)
// products.hasMany(orders)





module.exports={
    db,users,dealers,products,orders,carts
}