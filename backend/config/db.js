const mongoose = require('mongoose');
require('dotenv').config()

const monngoURI = process.env.MONGO_URI

const connectToMongo =async()=>{
    const conn = await mongoose.connect(monngoURI);
  
      console.log("MongoDB Connected");
    }


module.exports = connectToMongo;
