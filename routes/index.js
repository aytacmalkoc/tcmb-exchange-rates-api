const express = require('express');
const router = express.Router();
const { rateLimit } = require('../middlewares');
const { getExchangeRatesJSON } = require('../helpers');

router.get('/exchange-rates', rateLimit, async function(req, res, next) {
  const exchangeRates = await getExchangeRatesJSON();

  return res.json(exchangeRates).status(200);
});

module.exports = router;
