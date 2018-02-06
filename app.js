// const yargs = require('yargs');

// const geocode = require('./geocode/geocode')

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
// })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

// 64f9aa89b94cdcdbb95f5601c0bfe9ca

const request = require('request');
const yargs = require('yargs');

request({
    url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_APP}/52.5019332,13.4554471`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature)
    } else {
        console.log('Unable to fetch weather.')
    }
})