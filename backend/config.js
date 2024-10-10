const conf={
    mongodbUri:String(process.env.VITE_MONGODB_URI),
    port:Number(process.env.VITE_PORT)
}

module.exports=conf;