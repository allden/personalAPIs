const {fetchAndRespond, generateAuth} = require('./utils');

const url = 'http://gateway.marvel.com/v1/public';

// routes
module.exports.getCreators = (req, res) => {
    const auth = generateAuth();
    const endpoint = `${url}/creators?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getCreatorById = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/creators/${id}?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getCreatorComics = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/creators/${id}/comics?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getCreatorStories = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/creators/${id}/stories?${auth}`;

    fetchAndRespond(endpoint, res);
};

module.exports.getCreatorSeries = (req, res) => {
    const {id} = req.params;
    const auth = generateAuth();
    const endpoint = `${url}/creators/${id}/series?${auth}`;

    fetchAndRespond(endpoint, res);
};