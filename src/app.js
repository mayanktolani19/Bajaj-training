const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const port = process.env.PORT || 3000


// Define paths for express config.
const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setting handlebars with express
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('',(req,res)=>{
    res.render('index',{title:'Weather App', name: 'Mayank K Tolani'})
})

app.get('/about', (req, res)=>{
    res.render('about',{title:'About Me', name:'Mayank K Tolani'})
})

app.get('/about/*', (req,res)=>{
    res.render('404', {data:'404 About page not found', name:'Mayank K Tolani'})
})

app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error:"Please provide an address"
        })
    }
    forecast(req.query.address,(error,data)=>{
        if(data!=null){
            return res.send({
                forecast:data,
                address:req.query.address
            })
        }
        return res.send({error})
    })
})

app.get('*', (req,res)=>{
    res.render('404', {data:'404 Page not found', name:'Mayank K Tolani'})
})


app.listen(port, ()=>{
    console.log("Server is up on port"+port)
})