const {fetchAndRespond, generateUrl} = require('./utils');

// routes
module.exports.getSeries = (req, res) => {
    const endpoint = generateUrl(req, 'series');
    fetchAndRespond(endpoint, res);
};

module.exports.getSeriesById = (req, res) => {
    const endpoint = generateUrl(req, 'series');
    fetchAndRespond(endpoint, res);
};

module.exports.getSeriesCharacters = (req, res) => {
    const endpoint = generateUrl(req, 'series', 'characters');
    fetchAndRespond(endpoint, res);
};

module.exports.getSeriesCreators = (req, res) => {
    const endpoint = generateUrl(req, 'series', 'creators');
    fetchAndRespond(endpoint, res);
};