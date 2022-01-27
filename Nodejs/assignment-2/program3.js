//3. merge two files with sync write

const os = require("os")
const path = require("path")
const fs = require("fs")

const filePath1 = path.join(__dirname,'/data/data1.txt')
const filePath2 = path.join(__dirname,'/data/data2.txt')
const filePath3 = path.join(__dirname,'/data/data3.txt')

const data1 = fs.readFileSync(filePath1)
const data2 = fs.readFileSync(filePath2)

fs.writeFileSync(filePath3, data1)
fs.appendFileSync(filePath3, data2)
