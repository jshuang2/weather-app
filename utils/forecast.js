const request = require("request")

const forecast = (latitude, longitude, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=1b7bdcd4700f7f5c4802086411f80801&query=" + latitude + "," + longitude +  "&units=f"

    request({url: url, json: true}, (error, { body }) => {

        const { current } = body

        if (error) {
            callback("Unable to connect to weather service.", undefined)
        }
        else if (body.error) {
            console.log(callback)
            callback("Unable to find location.", undefined)
        }
        else {
            callback(undefined, current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees outside. There is a " + current.precip + "% chance of precipitation.")
        }
    })
}

module.exports = forecast