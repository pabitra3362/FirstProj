const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: String,
    title: String,
    text : String,
    count: Number,
    price: Number
  });

  const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    password: String
  })

  const cartSchema = new mongoose.Schema({
    image: String,
    title: String,
    text : String,
    count: Number,
    price: Number,
    email: String,
  });

const Products = mongoose.model('products', productSchema);
const Users=mongoose.model('users',userSchema)
const Carts=mongoose.model('carts',cartSchema)

module.exports={Products,Users,Carts}