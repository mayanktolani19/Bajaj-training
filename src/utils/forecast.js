const request = require('postman-request')

const forecast = (location,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=bb3a79839c59cd8fc6268cbe53aa429c&query='+location
    request({url:url, json:true}, (error,response)=>{
        if(error){
            callback("Unable to connect to the internet",undefined)
        }
        else if(response.body.error){
            callback("Unable to find location",undefined)
        }
        else{
            callback(undefined, response.body.current.weather_descriptions[0]+". Temp = "+response.body.current.temperature+". Feels like = "+response.body.current.feelslike)
        }
    })
}

module.exports = forecast