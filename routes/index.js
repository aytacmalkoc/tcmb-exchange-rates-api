const express = require('express');
const router = express.Router();
const { rateLimit, cache } = require('../middlewares');
const { getExchangeRatesJSON } = require('../helpers');

router.get('/exchange-rates', [rateLimit, cache()], async function(req, res, next) {
  const exchangeRates = await getExchangeRatesJSON();

  return res.json(exchangeRates).status(200);
});

module.exports = router;
