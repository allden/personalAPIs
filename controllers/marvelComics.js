const {fetchAndRespond, generateAuth} = require('./utils');

const url = 'http://gateway.marvel.com/v1/public';

// routes
module.exports.getComics = (req, res) => {
    const auth = generateAuth();
    const endpoint = `${url}/comics?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getComicById = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/comics/${id}?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getComicCharacters = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/comics/${id}/characters?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getComicCreators = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/comics/${id}/creators?${auth}`;

    fetchAndRespond(endpoint, res);
};