// import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';

// import express from 'express'
// const app = express();



import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path : "/.env"
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(` app is listening on PORT: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGODB not supported", error);
});











// function connectDB(){};

// connectDB();

// use IIFI
// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("app not loaded", (error)=>{
//             console.log("app is not connected", error);
//             throw error  // check 1
//         });

//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listening on port: ${process.env.PORT}`)
//         });

//     } catch (error) {
//         console.log("MONGODB connection not established", error);
//         throw error
//     }
// })();