const cryptojs = require('crypto-js');
const fetch = require('node-fetch');

const fetchAndRespond = (url, res) => {
    fetch(url)
    .then(fetchRes => fetchRes.json())
    .then(data => res.json({data}))
    .catch(err => errorHandling(err, res));
};

// generates the auth query to append to the api endpoint
// returns a string similar to "ts=1234&apikey=1234&hash=1234abcd1234"
const generateAuth = (
    marvelPublicKey=process.env.MARVEL_PUBLIC_KEY, 
    marvelPrivateKey=process.env.MARVEL_PRIVATE_KEY, 
    timestamp=new Date().getTime() / 1000
) => {
    const hashString = timestamp + marvelPrivateKey + marvelPublicKey;
    // generate md5 token for the MarvelAPI
    const hash = cryptojs.MD5(hashString);
    const queries = `ts=${timestamp}&apikey=${marvelPublicKey}&hash=${hash}`;
    return queries;
};

const generateQuery = (req = {query: {}}) => {
    let {nameStartsWith, offset, limit} = req.query;
    limit ? limit : limit = 20;
    offset ? offset : offset = 0;

    if(nameStartsWith) {
        return `nameStartsWith=${nameStartsWith}&offset=${offset}&limit=${limit}`;
    } else {
        return `limit=${limit}&offset=${offset}`;
    };
};

const generateUrl = (req, firstPath, secondPath) => {
    const {id} = req.params;
    const auth = generateAuth();
    const query = generateQuery(req);
    const url = `http://gateway.marvel.com/v1/public`;

    if(firstPath && secondPath && id) {
        return `${url}/${firstPath}/${id}/${secondPath}?${query}&${auth}`;
    } else if(firstPath && id) {
        return `${url}/${firstPath}/${id}?${query}&${auth}`;
    } else {
        return `${url}/${firstPath}?${query}&${auth}`;
    };
};

function errorHandling(err, res) {
    if(err) {
        return res.status(500).json({message: 'Something went wrong!'})
    };
};

module.exports = {
    fetchAndRespond,
    generateAuth,
    generateQuery,
    generateUrl
};