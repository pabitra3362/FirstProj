const conf={
    mongodbUri:String(process.env.VITE_MONGODB_URI) || "mongodb+srv://pmohanty1435:Pabitra3302@cluster0.fxweg.mongodb.net/rakesh",
    port:Number(process.env.VITE_PORT) || 3000
}

module.exports=conf;