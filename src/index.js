// require('dotenv').config({path : "./env"})
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path : "/.env"
})


connectDB()































// import mongoose from 'mongoose'
// import { DB_NAME } from './constants.js'

// import express from 'express'
// const app = express();

// // function connectDB(){}

// // connectDB()


// // by using IIFI
// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", ()=>{
//             console.log("db not supported", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listening on PORT: ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("Database not connected", error);
//         throw error;
//     }
// })()