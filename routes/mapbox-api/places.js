var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/', function(req, res, next) {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?access_token=${process.env.MAPBOX_KEY}`
        + "&types=poi&proximity=-96.95831539999999%2C32.8966877")
        .then(response => response.json())
        .then(response => res.send(response));
});

module.exports = router;
