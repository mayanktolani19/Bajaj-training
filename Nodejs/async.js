const fs = require("fs")
// Read file
// fs.readFile('./data/sample.txt', 'utf-8',(err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     setTimeout(()=>
//         console.log(data),2000
//     )
// })

// Read file async
const data = fs.readFileSync('./data/sample.txt','utf-8')
console.log(data)
console.log('finish')