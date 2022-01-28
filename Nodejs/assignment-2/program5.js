// How to read a file line by line using node.js ?

const fs = require("fs")
const readline = require("readline")

const file = readline.createInterface({
    input:fs.createReadStream('./data/data5.txt'),
    output:process.stdout,
    terminal:false
})

file.on('line',(line)=>{
    console.log(line)
})

// Resource - https://www.geeksforgeeks.org/how-to-read-a-file-line-by-line-using-node-js/