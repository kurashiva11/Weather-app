const request = require('request')
require('dotenv').config()

const API_KEY = process.env.WEATHER_API_KEY
const forecast = (latitude, longitude, callback) => { 
    const url = 'https://api.darksky.net/forecast/' + API_KEY + '/' + latitude + ',' + longitude + '?units=si'

    request( { url, json : true }, (error, response) => {
        //console.log(response)
        if(error) {
            callback('unable to connect to weather server!')
        }
        else if(response.body.error) {
            callback('unable to fetch weather information.')
        }
        else {
            callback(undefined,
                    [
                        [
                            response.body.daily.data[0].summary,
                            response.body.daily.data[0].temperatureLow,
                            response.body.daily.data[0].temperatureHigh,
                            response.body.daily.data[0].precipProbability
                        ],
                        [
                            response.body.daily.data[1].summary,
                            response.body.daily.data[1].temperatureLow,
                            response.body.daily.data[1].temperatureHigh,
                            response.body.daily.data[1].precipProbability
                        ],
                        [
                            response.body.daily.data[2].summary,
                            response.body.daily.data[2].temperatureLow,
                            response.body.daily.data[2].temperatureHigh,
                            response.body.daily.data[2].precipProbability
                        ],
                        [
                            response.body.daily.data[3].summary,
                            response.body.daily.data[3].temperatureLow,
                            response.body.daily.data[3].temperatureHigh,
                            response.body.daily.data[3].precipProbability
                        ],
                        [
                            response.body.daily.data[4].summary,
                            response.body.daily.data[4].temperatureLow,
                            response.body.daily.data[4].temperatureHigh,
                            response.body.daily.data[4].precipProbability
                        ],
                        [
                            response.body.daily.data[5].summary,
                            response.body.daily.data[5].temperatureLow,
                            response.body.daily.data[5].temperatureHigh,
                            response.body.daily.data[5].precipProbability
                        ],
                        [
                            response.body.daily.data[6].summary,
                            response.body.daily.data[6].temperatureLow,
                            response.body.daily.data[6].temperatureHigh,
                            response.body.daily.data[6].precipProbability
                        ]
                    ]
                )
            }
    })
}


module.exports = forecast