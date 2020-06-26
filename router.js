const express = require('express');
const router = express.Router();
const geoip = require('geoip-lite');
const fetch = require('node-fetch');

router.get('/', (req, res) => {
    const url = `${req.protocol}://${req.hostname}`;
    return res.json({
        'message': 'Welcome to the API.',
        'endpoints': {
            opencagedata: `${url}/opencagedata/?q=43.000,10.0000`,
            openweathermap: `${url}/openweathermap/?lat=43.000&lon=10.0000&exclude=hourly,daily,minutely&units=imperial|metric|standard`,
            iplookup: `${url}/iplookup/?ip=1.1.1.1(optional)`,
            foursquare: `${url}/foursquare/?ll=43.000,10.0000&query=cafe&v=20180323&limit=10`
        }
    });
});

router.get('/iplookup', (req, res) => {
    let userIp = req.headers['x-forwarded-for'];
    if(userIp === null) {
        userIp = req.getRemoteAddr();
    };
    const requestedIp = req.query.ip;
    const queryFilter = /^[0-9\.]+$/;
    let geo = geoip.lookup(userIp);

    if(requestedIp && queryFilter.test(requestedIp)) {
        geo = geoip.lookup(requestedIp);
    };
    
    if (requestedIp && queryFilter.test(requestedIp) === false) {
        errorHandling({
            res,
            msg: 'Invalid IP address',
            status: 400
        });
    };

    return res.json(geo);
});

// PLACES API FOURSQUARE
router.get('/foursquare', (req, res) => {
    const {ll, query, v, limit} = req.query;
    const clientId = process.env.FOURSQUARE_CLIENT_ID;
    const clientSecret = process.env.FOURSQUARE_CLIENT_SECRET;
    let url = `https://api.foursquare.com/v2/venues/explore?client_id=${clientId}&client_secret=${clientSecret}&ll=${ll}&query=${query}&v=${v}&limit=${limit}`;
    console.log(url);

    fetch(url)
    .then(fetchRes => fetchRes.json())
    .then(data => res.json(data))
    .catch(err => errorHandling({res, err}));
});

// ONE CALL WEATHER DATA
router.get('/openweathermap', (req, res) => {
    const {lat, lon, exclude, units} = req.query;
    const appId = process.env.OPENWEATHERMAP_APPID;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appId}&units=${units}`;
    console.log(url);

    fetch(url)
    .then(fetchRes => fetchRes.json())
    .then(data => res.json(data))
    .catch(err => errorHandling({res, err}))
});

// FORWARD AND REVERSE GEOCODING
router.get('/opencagedata', (req, res) => {
    const {q} = req.query;
    const key = process.env.OPENCAGEDATA_APPID;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${q}&key=${key}`;
    console.log(url);

    fetch(url)
    .then(fetchRes => fetchRes.json())
    .then(data => res.json(data))
    .catch(err => errorHandling({res, err}));
});

// controllers
const comics = require('./controllers/marvelComics');
const characters = require('./controllers/marvelCharacters');
const series = require('./controllers/marvelSeries');
const stories = require('./controllers/marvelStories');
const creators = require('./controllers/marvelCreators');

// CHARACTERS
router.get('/marvel/characters', characters.getCharacters);
router.get('/marvel/characters/:id', characters.getCharacterById);
router.get('/marvel/characters/:id/comics', characters.getCharacterComics);
router.get('/marvel/characters/:id/series', characters.getCharacterSeries);
router.get('/marvel/characters/:id/stories', characters.getCharacterStories);

// COMICS
router.get('/marvel/comics', comics.getComics);
router.get('/marvel/comics/:id', comics.getComicById);
router.get('/marvel/comics/:id/characters', comics.getComicCharacters);
router.get('/marvel/comics/:id/creators', comics.getComicCreators);

// SERIES
router.get('/marvel/series', series.getSeries);
router.get('/marvel/series/:id', series.getSeriesById);
router.get('/marvel/series/:id/characters', series.getSeriesCharacters);
router.get('/marvel/series/:id/creators', series.getSeriesCreators);

// STORIES
router.get('/marvel/stories', stories.getStories);
router.get('/marvel/stories/:id', stories.getStoryById);
router.get('/marvel/stories/:id/characters', stories.getStoryCharacters);
router.get('/marvel/stories/:id/creators', stories.getStoryCreators);

// CREATORS
router.get('/marvel/creators', creators.getCreators);
router.get('/marvel/creators/:id', creators.getCreatorById);
router.get('/marvel/creators/:id/stories', creators.getCreatorStories);
router.get('/marvel/creators/:id/series', creators.getCreatorSeries);
router.get('/marvel/creators/:id/comics', creators.getCreatorComics);

// WHEN THINGS GO HORRIBLY WRONG
function errorHandling(obj) {
    let msg = obj.msg || 'Something went wrong.';
    let status = obj.status || 500;
    const {res, err} = obj;

    if(err) console.error('ERROR:', err);

    return res.status(status).json({
        'message': msg
    });
};

module.exports = router;