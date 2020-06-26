const {fetchAndRespond, generateAuth} = require('./utils');

const url = 'http://gateway.marvel.com/v1/public';

// routes
module.exports.getCharacters = (req, res) => {
    const auth = generateAuth();
    const endpoint = `${url}/characters?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getCharacterById = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/characters/${id}?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getCharacterComics = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/characters/${id}/comics?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getCharacterStories = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/characters/${id}/stories?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getCharacterSeries = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/characters/${id}/series?${auth}`;

    fetchAndRespond(endpoint, res);
};