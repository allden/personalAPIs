const cryptojs = require('crypto-js');
const fetch = require('node-fetch');

module.exports.fetchAndRespond = (url, res) => {
    fetch(url)
    .then(fetchRes => fetchRes.json())
    .then(data => res.json({data}))
    .catch(err => errorHandling(err, res));
};

// generates the auth query to append to the api endpoint
// returns a string similar to "ts=1234&apikey=1234&hash=1234abcd1234"
module.exports.generateAuth = (
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

function errorHandling(err, res) {
    if(err) {
        return res.status(500).json({message: 'Something went wrong!'})
    };
};