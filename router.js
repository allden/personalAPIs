const express = require('express');
const router = express.Router();
const geoip = require('geoip-lite');

router.get('/', (req, res) => {
    const userIp = req.ip;
    const requestedIp = req.query.ip;
    const queryFilter = /^[0-9\.]+$/;
    let geo = geoip.lookup(userIp);

    if(requestedIp && queryFilter.test(requestedIp)) {
        geo = geoip.lookup(requestedIp);
    };
    
    if (requestedIp && queryFilter.test(requestedIp) === false) {
        return res.status(400).json({
            message: 'Invalid IP address'
        });
    };

    return res.json(geo);
});

module.exports = router;