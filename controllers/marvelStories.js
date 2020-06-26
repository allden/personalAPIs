const {fetchAndRespond, generateAuth} = require('./utils');

const url = 'http://gateway.marvel.com/v1/public';

// routes
module.exports.getStories = (req, res) => {
    const auth = generateAuth();
    const endpoint = `${url}/stories?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getStoryById = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/stories/${id}?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getStoryCharacters = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/stories/${id}/characters?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getStoryCreators = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/stories/${id}/creators?${auth}`;

    fetchAndRespond(endpoint, res);
};