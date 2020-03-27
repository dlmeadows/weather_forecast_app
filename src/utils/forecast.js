const request = require('request');
const config = require('../config/config');
const darkSkyKey = config.darkSkyKey;

/**
 * Takes in the latitude and longitude as arguments and returns the forecast for that address
 * @param latitude
 * @param longitude
 * @param callback
 */
const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/873aa2d9043f3ff7b1ffab06d6580683/${latitude},${longitude}`;
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback(`Unable to connect to weather service!`, undefined);
        } else if (body.error) {
            callback(`Unable to find location.`, undefined);
        } else {
            callback(undefined,
                `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`
            );
        }
    });
};

module.exports = forecast;
