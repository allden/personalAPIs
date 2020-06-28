const {fetchAndRespond, generateUrl} = require('./utils');

// routes
module.exports.getCreators = (req, res) => {
    const endpoint = generateUrl(req, 'creators');
    fetchAndRespond(endpoint, res);
};

module.exports.getCreatorById = (req, res) => {
    const endpoint = generateUrl(req, 'creators');
    fetchAndRespond(endpoint, res);
};

module.exports.getCreatorComics = (req, res) => {
    const endpoint = generateUrl(req, 'creators', 'comics');
    fetchAndRespond(endpoint, res);
};

module.exports.getCreatorStories = (req, res) => {
    const endpoint = generateUrl(req, 'creators', 'stories');
    fetchAndRespond(endpoint, res);
};

module.exports.getCreatorSeries = (req, res) => {
    const endpoint = generateUrl(req, 'creators', 'series');
    fetchAndRespond(endpoint, res);
};