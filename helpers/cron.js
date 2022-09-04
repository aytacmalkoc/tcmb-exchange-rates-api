const CronJob = require('cron').CronJob;
const axios = require('axios');

// helpers
const { isLocalFileU2D, writeLocalFile } = require('./file');
const { createExchangeObject } = require('./object');

// Run this job every day at 15:30
const checkTCMBApi = new CronJob('30 15 * * *', async () => {
    const { data } = await axios.get(process.env.TCMB_API_URL);
    const exchangeRates = createExchangeObject(data)

    if (!isLocalFileU2D(exchangeRates.last_update.bulletin_no)) {
        writeLocalFile(exchangeRates);
    }
}, null, true, 'Europe/Istanbul');

checkTCMBApi.start();