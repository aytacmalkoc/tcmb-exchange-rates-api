# 🪙 TCMB Exchange Rates API

This API service provides TCMB's [exchange rates](https://www.tcmb.gov.tr/kurlar/today.xml) data.

## 👉 Usage

You can access the [exchange rates at](https://tcmb-exchange-rates.herokuapp.com/exchange-rates).

## 💡 Example

```js
const axios = require("axios");
const API_URL = "https://tcmb-exchange-rates.herokuapp.com/exchange-rates";

const { data } = await axios.get(API_URL);

const { usd, eur, sek } = data.exchangeRates;
```

## ⌛ Rate Limits & Caching

Default rate limits are set to `100` requests per hour. API requests are cached for 5 minutes by default.

## 🔗 Installation

#### Clone Repository

```bash
git clone https://github.com/aytacmalkoc/tcmb-exchange-rates-api.git
```

#### Install Dependencies

```bash
yarn install
```

## Run Development Server

```bash
yarn dev
```

## 💁 License

MIT license, Copyright (c) Aytac Malkoc. For more information see [LICENSE](https://github.com/aytacmalkoc/tcmb-exchange-rates-api/blob/main/LICENSE).
