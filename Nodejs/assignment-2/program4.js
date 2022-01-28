// Write a node.js program to get files or directories of a directory in JSON format.

const path = require("path")
const fs = require("fs")

const directoryPath = path.join(__dirname,'../')
fs.readdir(directoryPath, (err, files)=>{
    if(err){
        console.log(err)
    }
    else{
        res = {files:[]}
        files.forEach((file)=>{
            res.files.push(file)
        })
        console.log(res)
    }
})

console.log(directoryPath)

// Resource - https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5