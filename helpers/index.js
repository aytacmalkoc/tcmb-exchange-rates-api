const axios = require('axios');
const convert = require('xml-js');

// convert xml data to json
const xml2json = (xml) => {
    const json = convert.xml2json(xml, { compact: true, spaces: 4 });

    return JSON.parse(json);
}

// fetch exchange rates from TCMB
const fetchExchanges = async () => {
    const { data } = await axios.get('https://www.tcmb.gov.tr/kurlar/today.xml');

    return data;
}

const getExchangeRatesJSON = async () => {
    const exchanges = await fetchExchanges();
    const json = xml2json(exchanges);

    return createExchangeObject(json);
}

// create a new object with exchange rates
const createExchangeObject = (exchanges) => {
    let arr = {
        last_update: {
            date_tr: exchanges.Tarih_Date._attributes.Tarih,
            date_en: exchanges.Tarih_Date._attributes.Date,
            bulletin_no: exchanges.Tarih_Date._attributes.Bulten_No,
        },
        exchangeRates: {}
    };

    exchanges.Tarih_Date.Currency.forEach(currency => {
        const currencyCode = currency._attributes.CurrencyCode.toLowerCase();

        arr.exchangeRates[currencyCode] = {
            crossOrder: currency._attributes.CrossOrder,
            code: currency._attributes.Code,
            currencyCode,
            unit: currency.Unit._text,
            name_tr: currency.Isim._text,
            name_en: currency.CurrencyName._text,
            forexBuying: currency.ForexBuying._text || null,
            forexSelling: currency.ForexSelling._text || null,
            banknoteBuying: currency.BanknoteBuying._text || null,
            banknoteSelling: currency.BanknoteSelling._text || null,
            crossRateUSD: currency.CrossRateUSD._text || null,
            crossRateOther: currency.CrossRateOther._text || null,
        }
    });

    return arr;
}

module.exports = {
    xml2json,
    fetchExchanges,
    getExchangeRatesJSON,
    createExchangeObject
};