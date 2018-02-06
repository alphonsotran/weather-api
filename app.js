const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1129%20South%20Sunkist%20Avenue%20West%20Covina%20CA',
    json: true
}, (error, response, body) => {
    console.log(body);
})