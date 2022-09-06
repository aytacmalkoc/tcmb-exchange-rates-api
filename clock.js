const CronJob = require('cron').CronJob;
const axios = require('axios');

// helpers
const { isLocalFileU2D, writeLocalFile, readLocalFile } = require('./helpers/file');
const { createExchangeObject } = require('./helpers/object');

// Run this job every day at 15:30

const fetchUpdates = new CronJob('*/2 * * * *', async () => {
    try {
        const { data } = await axios.get('https://www.tcmb.gov.tr/kurlar/today.xml');
        const exchangeRates = createExchangeObject(data)

        if (!isLocalFileU2D(exchangeRates.last_update.bulletin_no)) {
            writeLocalFile(exchangeRates);
            console.log('writing: ', exchangeRates);
            console.log('reading: ', readLocalFile());
        }
    } catch (error) {
        console.error(error.message);
    }
}, null, true, 'Europe/Istanbul');

fetchUpdates.start();