const { readLocalFile } = require('./file');

const getExchangeRates = () => readLocalFile();

module.exports = {
    getExchangeRates
};