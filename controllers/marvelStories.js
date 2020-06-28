const {fetchAndRespond, generateUrl} = require('./utils');

// routes
module.exports.getStories = (req, res) => {
    const endpoint = generateUrl(req, 'stories');
    fetchAndRespond(endpoint, res);
};

module.exports.getStoryById = (req, res) => {
    const endpoint = generateUrl(req, 'stories');
    fetchAndRespond(endpoint, res);
};

module.exports.getStoryCharacters = (req, res) => {
    const endpoint = generateUrl(req, 'stories', 'characters');
    fetchAndRespond(endpoint, res);
};

module.exports.getStoryCreators = (req, res) => {
    const endpoint = generateUrl(req, 'stories', 'creators');
    fetchAndRespond(endpoint, res);
};