const CronJob = require('cron').CronJob;
const axios = require('axios');

// helpers
const { isLocalFileU2D, writeLocalFile } = require('./helpers/file');
const { createExchangeObject } = require('./helpers/object');

// Run this job every day at 15:30

const URL = 'https://www.tcmb.gov.tr/kurlar/today.xml';

const fetchUpdates = new CronJob('*/5 * * * *', async () => {
    const { data } = await axios.get(process.env.TCMB_API_URL || URL);
    const exchangeRates = createExchangeObject(data)

    if (!isLocalFileU2D(exchangeRates.last_update.bulletin_no)) {
        writeLocalFile(exchangeRates);
    }
}, null, true, 'Europe/Istanbul');

const testClock = new CronJob('* * * * * *', () => console.log('working'), null, true, 'Europe/Istanbul');


fetchUpdates.start();
testClock.start();