const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=1b7bdcd4700f7f5c4802086411f80801&query=37.8267,-122.4233"

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})