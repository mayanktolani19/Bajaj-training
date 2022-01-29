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
    password:{
        type:String,
        required:[true,"Enter your password"]
    },
    mobile:{
        type:Number,
        required:[true, "Enter your mobile number"]
    },
    area:String, 
    country:{
        type:String,
        default:"IND",
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    address:String,
 })

 module.exports = User