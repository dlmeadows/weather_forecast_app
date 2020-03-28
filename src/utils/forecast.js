const request = require('request');
const config = require('../../config/config');

let darkSkyKey = config.darkSkyKey;
if (!darkSkyKey) {
    darkSkyKey = process.env.DARK_SKY_KEY;
}

/**
 * Takes in the latitude and longitude as arguments and returns the forecast for that address
 * @param latitude
 * @param longitude
 * @param callback
 */
const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/${darkSkyKey}/${latitude},${longitude}`;
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback(`Unable to connect to weather service!`, undefined);
        } else if (body.error) {
            callback(`Unable to find location.`, undefined);
        } else {
            callback(undefined,
                `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a high today of ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability}% chance of rain.`
            );
        }
    });
};

module.exports = forecast;
