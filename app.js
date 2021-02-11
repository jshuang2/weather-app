const request = require("request")
const geocode = require("./utils/geocode")

// const url = "http://api.weatherstack.com/current?access_key=1b7bdcd4700f7f5c4802086411f80801&query=37.8267,-122.4233&units=f"

// request({ url: url, json: true }, (error, response) => {
//     const current = response.body.current

//     if (error) {
//         console.log("Unable to connect to weather service.") 
//     }
//     else if (response.body.error) {
//         console.log("Unable to find location.")
//     }
//     else {
//         console.log(current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. There is a " + current.precip + "% chance of rain.")
//     }
// })


geocode("Hawaii", (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})