//1. Write the os specs to a file using sync and async
const os = require("os")
const path = require("path")
const fs = require("fs")

const osSpecs = {
    "uptime":os.uptime(),
    "type":os.type(),
    "release":os.release(),
    "totalMemory":os.totalmem(),
    "freeMemory":os.freemem(),
}

const filePath = path.join(__dirname,'/data/data1.txt')
fs.writeFileSync(filePath, JSON.stringify(osSpecs))