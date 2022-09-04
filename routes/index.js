const express = require('express');
const router = express.Router();
const { getExchangeRates } = require('../helpers');

router.get('/exchange-rates', async function(req, res, next) {
  const exchangeRates = await getExchangeRates();

  return res.status(200).json(exchangeRates);
});

module.exports = router;
