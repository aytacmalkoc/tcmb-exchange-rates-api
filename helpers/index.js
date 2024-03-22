const axios = require("axios");
const { createExchangeObject } = require("./object");

const getExchangeRates = async () => {
	const { data } = await axios.get(encodeURI(process.env.TCMB_API_URL));

	return createExchangeObject(data);
};

module.exports = {
	getExchangeRates,
};
