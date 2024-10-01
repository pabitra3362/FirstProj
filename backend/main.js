const express = require('express')
require("dotenv").config()
const app = express()
const mongoose = require('mongoose')
const model = require('./store')
const cors = require('cors')
const conf =require("./config")
const port = conf.port


mongoose.connect(conf.mongodbUri).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use(express.json())
app.use(cors())


app.post('/api/products', async (req, res) => {
    const product = await model.Products.find({})
    res.json(product)

})
app.post('/register', async (req, res) => {
   try {
    const data=req.body
    const isUserExist=await model.Users.findOne({email:data.email})
    if(isUserExist){
        return res.json({message:"User already exist"})
    }else{
        const user=new model.Users(data)
        await user.save()
        return res.json({message:"registration successfull"})
    }
   } catch (error) {
    return res.status(200).json({message:`error in creating user: ${error.message}`})
    
   }
})

app.post('/auth', async (req, res) => {
    const data=req.body
    const user=await model.Users.findOne({email:data.email})
    if(user){
        if(data.password===user.password){
            res.json({message:"login success",user:user.name,email:user.email})
        }else{
            res.json({message:"Invalid Password"})
        }
    }else{
        res.json({message:"Invalid User"})
    }
})

app.post('/addToCart', async (req, res) => {
    try {
        const {id,image,title,text,count,price,email} = req.body;
        const isExist = await model.Carts.findOne({ title: title,email:email});
        
        if (!isExist) {
            const cart = new model.Carts({image,title,text,count,price,email});
            await cart.save();
            return res.status(201).json({ message: 'Item added to cart.' });
        } else {
            return res.status(200).json({ message: 'Item already exists in cart.' });
        }
    } catch (error) {
        console.error("Error adding to cart:", error);
        return res.status(500).json({ message: 'Server error.' });
    }
});





app.post('/changeCart',async (req,res)=>{
    try {
    const data=req.body
    await model.Carts.deleteMany({email:await data[0].email})
    const carts=await model.Carts.insertMany(data)
    res.json({message:"Cart updated"})
    } catch (error) {
        console.log('error in changeCart: error');
        return res.json({message:'server error during changeCart'})
        
    }
    
})


app.post('/deleteCart', async (req, res) => {
    
   try {
   const data=req.body
   await model.Carts.deleteOne({_id:data._id,email:data.email})
   return res.json({message:"cart deleted"})
   } catch (error) {
    return res.status(500).json({message:"error occured in deletecart",error:error})
   }
 
})

app.post('/showCarts', async (req, res) => {

   const data=req.body
   const carts=await model.Carts.find({email:data.email})
   res.send(carts)
 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})