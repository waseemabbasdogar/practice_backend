// import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';

// if use app.on function as soon as db connected.so 
// import express from 'express'
// const app = express();


import connectDB from "./db/index.js";
import dotenv from 'dotenv'


dotenv.config({
    path : "/.env"
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`app is listening on port: ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB connection FAILED.", error);
})















// function connectDB(){};

// connectDB();

// but use IIFI
// ; (async ()=> {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("ERROR", ()=>{
//             console.log("app is not loading", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(` APP is listening on port: ${process.env.PORT}`)
//         });
//     } catch (error) {
//         console.log("MONGODB connection not established", error);
//         throw error;
//     }
// })()