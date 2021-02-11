const request = require("request")

const forecast = (latitude, longitude, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=1b7bdcd4700f7f5c4802086411f80801&query=" + longitude + "," + latitude +  "&units=f"

    request({url: url, json: true}, (error, response) => {

        const current = response.body.current

        if (error) {
            callback("Unable to connect to weather service.", undefined)
        }
        else if (response.body.error) {
            console.log(callback)
            callback("Unable to find location.", undefined)
        }
        else {
            callback(undefined, {
                weatherDescription: current.weather_descriptions[0],
                currentTemp: current.temperature,
                percentChanceOfPrecip: current.precip
            })
        }
    })
}

module.exports = forecast