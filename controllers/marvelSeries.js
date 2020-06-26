const {fetchAndRespond, generateAuth} = require('./utils');

const url = 'http://gateway.marvel.com/v1/public';

// routes
module.exports.getSeries = (req, res) => {
    const auth = generateAuth();
    const endpoint = `${url}/series?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getSeriesById = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/series/${id}?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getSeriesCharacters = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/series/${id}/characters?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getSeriesCreators = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/series/${id}/creators?${auth}`;

    fetchAndRespond(endpoint, res);
};