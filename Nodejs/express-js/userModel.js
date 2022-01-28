const express = require("express")
const app = express()

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mayank:hello123@cluster0.n9egl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const User=mongoose.model("publications",{
    email:{
     type:String,
     unique:true,
     required:[true,"please enter the email"],
    },
    userName:{
     type:String,
     minlength:[5,"please enter atleast 5 characters"],
     maxlength:15
    },
    interest:{
     type:[String],
     enum:["react","node","express"],
     required:true
    }
 })
 const user1=new User(
     {
         email:"test123@gmail.com",
         userName:"test12",
         interest:["node"] // It will accept only the enums values, i.e, react, node, express.
     }
 )
 user1.save().then(()=>console.log("user added successfully"))