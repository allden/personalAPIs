const {fetchAndRespond, generateUrl} = require('./utils');

// routes
module.exports.getComics = (req, res) => {
    const endpoint = generateUrl(req, 'comics');
    fetchAndRespond(endpoint, res);
};

module.exports.getComicById = (req, res) => {
    const endpoint = generateUrl(req, 'comics');
    fetchAndRespond(endpoint, res);
};

module.exports.getComicCharacters = (req, res) => {
    const endpoint = generateUrl(req, 'comics', 'characters');
    fetchAndRespond(endpoint, res);
};

module.exports.getComicCreators = (req, res) => {
    const endpoint = generateUrl(req, 'comics', 'creators');
    fetchAndRespond(endpoint, res);
};