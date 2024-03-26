 import express,{Express,Request,Response}from 'express'
 import dotenv from 'dotenv'
 import * as fs from 'fs'
 import mongoose from 'mongoose'
 dotenv.config()
 console.log(process.env.PORT)
 const app=express()
 const port=process.env.PORT
 app.listen(port,()=>{
    console.log('server is running')
 })

 app.get("/",(req:Request,res:Response)=>{
    res.send("response from API")
 })
 const text=fs.readFileSync("./src/input.txt","utf-8")
 console.log("text")

 mongoose.connect("mongodb+srv://maryemsmadhi:kZfaAlD57Mxlm4I1@cluster0.p05upvb.mongodb.net/").then(()=>{console.log("Connected successfully")})
 .catch(()=>{
   console.log("Connexion failed")
 })