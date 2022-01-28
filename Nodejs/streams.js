const fs = require("fs")
const readerPointer = fs.createReadStream('./data/sample.txt')
const data = ""
readerPointer.on("data", (chunk)=>{
    data+=chunk
})
readerPointer.on("end",()=>{
    console.log(data)
})

readerPointer.on("err",(err)=>{
    console.log(err)
}
)