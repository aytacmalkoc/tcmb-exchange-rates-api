const CronJob = require('cron').CronJob;
const axios = require('axios');

// helpers
const { isLocalFileU2D, writeLocalFile } = require('./helpers/file');
const { createExchangeObject } = require('./helpers/object');

// Run this job every day at 15:30

const fetchUpdates = new CronJob('*/5 * * * *', async () => {
    try {
        const { data } = await axios.get('https://www.tcmb.gov.tr/kurlar/today.xml');
        const exchangeRates = createExchangeObject(data)

        if (!isLocalFileU2D(exchangeRates.last_update.bulletin_no)) {
            writeLocalFile(exchangeRates);
            console.log('writing');
        }
    } catch (error) {
        console.log(error.message);
    }
}, null, true, 'Europe/Istanbul');

fetchUpdates.start();