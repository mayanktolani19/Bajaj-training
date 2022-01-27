//2. Write diff types of data to a file and read it.

const os = require("os")
const path = require("path")
const fs = require("fs")

const obj = {name:"Mayank K Tolani", email:"mayank.tolani@bajajfinserv.in"}

let arr = [1,2,3,4,5]

let a = 10
let b = 2.5

const filePath = path.join(__dirname,'/data/data2.txt')
fs.writeFileSync(filePath, JSON.stringify(obj))
fs.appendFileSync(filePath, "\n"+String(arr))
fs.appendFileSync(filePath, "\n"+String(a))
fs.appendFileSync(filePath, "\n"+String(b))