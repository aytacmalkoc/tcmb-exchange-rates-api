const xml2json = require("./xml2json");

const createExchangeObject = (xml) => {

    const exchanges = xml2json(xml);

    let arr = {
        last_update: {
            date_tr: exchanges.Tarih_Date._attributes.Tarih,
            date_en: exchanges.Tarih_Date._attributes.Date,
            bulletin_no: exchanges.Tarih_Date._attributes.Bulten_No,
        },
        exchangeRates: {}
    };

    exchanges.Tarih_Date.Currency.forEach(currency => {
        const currencyCodeLower = currency._attributes.CurrencyCode.toLowerCase().trim();

        arr.exchangeRates[currencyCodeLower] = {
            crossOrder: parseInt(currency._attributes.CrossOrder),
            code: currency._attributes.Code,
            currencyCode: currency._attributes.CurrencyCode,
            unit: parseInt(currency.Unit._text),
            name_tr: currency.Isim._text,
            name_en: currency.CurrencyName._text,
            forexBuying: parseFloat(currency.ForexBuying._text) || null,
            forexSelling: parseFloat(currency.ForexSelling._text) || null,
            banknoteBuying: parseFloat(currency.BanknoteBuying._text) || null,
            banknoteSelling: parseFloat(currency.BanknoteSelling._text) || null,
            crossRateUSD: parseFloat(currency.CrossRateUSD._text) || null,
            crossRateOther: parseFloat(currency.CrossRateOther._text) || null,
        }
    });

    return arr;
};

module.exports = {
    createExchangeObject,
}