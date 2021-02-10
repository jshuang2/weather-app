const request = require("request")

const url = "http://api.weatherstack.com/current?access_key=1b7bdcd4700f7f5c4802086411f80801&query=37.8267,-122.4233&units=f"

request({ url: url, json: true }, (error, response) => {
    const current = response.body.current

    if (error) {
        console.log("Unable to connect to weather service.") 
    }
    else if (response.body.error) {
        console.log("Unable to find location")
    }
    else {
        console.log(current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. There is a " + current.precip + "% chance of rain.")
    }
})



const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiamh1YW5nMiIsImEiOiJja2tya2FzMWIwZGR0MnBsam5zejhmNzd1In0.c46vnzArKwxnChHgH7-wnQ&limit=1"

request({ url: geocodeURL, json: true}, (error, response) => {

    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]

    console.log(latitude, longitude)
})