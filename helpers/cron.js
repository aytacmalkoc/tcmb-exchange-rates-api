const cron = require('node-cron');
const axios = require('axios');

// helpers
const { isLocalFileU2D, writeLocalFile } = require('./file');
const { createExchangeObject } = require('./object');

// Run this job every day at 15:30
cron.schedule('30 15 * * *', async () => {
    const { data } = await axios.get(process.env.TCMB_API_URL);
    const exchangeRates = createExchangeObject(data)

    if (!isLocalFileU2D(exchangeRates.last_update.bulletin_no)) {
        writeLocalFile(exchangeRates);
    }
}, {
    timezone: 'Europe/Istanbul'
});