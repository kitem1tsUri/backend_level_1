   const mongoose = require("mongoose"); 
   
   const uri = 
   "mongodb+srv://kitetsu:010707050711@khuslens.jegg0by.mongodb.net/?retryWrites=true&w=majority"

   const connect = async () => { 
    try { 
        await mongoose.connect(uri);
        console.log("Database is succesfuly connected.")
    } catch (error) { 
        console.log(error);
    }
   };
   module.exports = connect;