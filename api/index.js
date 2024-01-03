const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const User=require("./models/user.model.js");

require("dotenv").config();
app.use(cors());
app.use(express.json());


const port=process.env.PORT || 4000;



// mongoose.connect(`mongodb+srv://${user}:${pass}@cluster4.ii96xua.mongodb.net`)


app.post("/register", (req,res)=>{
   const {username,password}=req.body;
   res.json({username,password});
    
})

app.listen(port,()=>{
    console.log(`App is listening at port ${port}`)
})

