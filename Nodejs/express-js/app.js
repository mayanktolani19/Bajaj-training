const app = require("express")()
// const SampleRoutes = require("./routes/sample")

const signup = require("./routes/createUser")
const bodyParser = require('body-parser')
const findAll = require("./routes/findUser")
const signin = require("./routes/signIn")

app.use(bodyParser.json())

app.use('/',signup)
app.use('/',findAll)
app.use('/',signin)

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})