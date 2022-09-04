const express = require('express');
const router = express.Router();
const { rateLimit, cache } = require('../middlewares');
const { getExchangeRates } = require('../helpers');

router.get('/exchange-rates', [rateLimit, cache()], async function(req, res, next) {
  const exchangeRates = await getExchangeRates();

  return res.status(200).json(exchangeRates);
});

module.exports = router;
