const {fetchAndRespond, generateUrl} = require('./utils');

// routes
module.exports.getCharacters = (req, res) => {
    const endpoint = generateUrl(req, 'characters');
    fetchAndRespond(endpoint, res);
};

module.exports.getCharacterById = (req, res) => {
    const endpoint = generateUrl(req, 'characters');
    fetchAndRespond(endpoint, res);
};

module.exports.getCharacterComics = (req, res) => {
    const endpoint = generateUrl(req, 'characters', 'comics');
    fetchAndRespond(endpoint, res);
};

module.exports.getCharacterStories = (req, res) => {
    const endpoint = generateUrl(req, 'characters', 'stories');
    fetchAndRespond(endpoint, res);
};

module.exports.getCharacterSeries = (req, res) => {
    const endpoint = generateUrl(req, 'characters', 'series');
    fetchAndRespond(endpoint, res);
};