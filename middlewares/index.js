const expressRateLimit = require('express-rate-limit');
const apiCache = require('apicache');

const rateLimit = expressRateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100, // limit each IP to 100 requests per windowMs
    skip: (req, res) => req.ip === '::ffff:127.0.0.1',
    standardHeaders: true,
	legacyHeaders: false,
});

const cache = (duration = '5 minutes') => apiCache.middleware(duration);

module.exports = {
    rateLimit,
    cache
};