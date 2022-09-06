const CronJob = require('cron').CronJob;
const axios = require('axios');

// helpers
const { isLocalFileU2D, writeLocalFile } = require('./file');
const { createExchangeObject } = require('./object');

// Run this job every day at 15:30
const fetchUpdates = new CronJob('* * * * * *', async () => {
    console.log('work');
    // const { data } = await axios.get(process.env.TCMB_API_URL);
    // const exchangeRates = createExchangeObject(data)

    // if (!isLocalFileU2D(exchangeRates.last_update.bulletin_no)) {
    //     writeLocalFile(exchangeRates);
    // }
}, null, true, 'Europe/Istanbul');


fetchUpdates.start();