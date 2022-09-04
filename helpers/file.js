const fs = require('fs');
const path = require('path');
const appRootDir = require('app-root-dir').get();

const localFilePath = path.join(appRootDir, 'exchange-rates.json')

const readLocalFile = () => {
    try {
        const file = fs.readFileSync(localFilePath, 'utf-8');

        return JSON.parse(file);
    } catch (error) {
        throw Error(error);
    }
};

const writeLocalFile = (content) => {
    try {
        fs.writeFileSync(localFilePath, JSON.stringify(content, null, 2), 'utf-8');

        return readLocalFile();
    } catch (error) {
        throw Error(error);
    }
}

const isLocalFileU2D = (bulletin_no) => {
    try {
        const file = readLocalFile();
        const localBulletin = file.last_update.bulletin_no.split('/')[1];
        const givenBulletin = bulletin_no.split('/')[1];

        return parseInt(givenBulletin) < parseInt(localBulletin);
    } catch (error) {
        throw Error(error);
    }
}

module.exports = {
    readLocalFile,
    writeLocalFile,
    isLocalFileU2D
}