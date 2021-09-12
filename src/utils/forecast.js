const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a090d09c25aea392707dc3e3ed17f503&query=${latitude},${longtitude}&units=f`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect weather service', undefined)
    } else if (body.error) {
      callback('Unable to connect to location', undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]} It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
    }
  })
}

module.exports = forecast