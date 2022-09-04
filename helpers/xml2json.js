const convert = require('xml-js');

const xml2json = (xml) => {
    const json = convert.xml2json(xml, { compact: true, spaces: 4 });

    return JSON.parse(json);
}

module.exports = xml2json;