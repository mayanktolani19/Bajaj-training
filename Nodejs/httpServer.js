const http = require("http")
const url = require("url")

// Normal function
// http.createServer(function (req, res){
//     console.log(req)
//     res.write("<h1>request received</h1>")
//     res.end()
// })


// Arrow function - mostly used
const app = http.createServer((req, res)=>{
    const queryData = url.parse(req.url, true)
    console.log(queryData.pathname)
    if(queryData.pathname==='/products')
        res.write("<h1>Products page</h1>")
    else if(queryData.pathname==='/checkout')
        res.write("<h1>Checkout page</h1>")
    res.end()
})

app.listen(3000, ()=>{console.log("Server running on port 3000")})