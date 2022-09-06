# Changelog

## 1.0.2 (2022-09-04)

#### **Updated**

- Changed return types of some fields from string to float and integer.

  | Field                           | Old Type | New Type |
  | ------------------------------- | -------- | -------- |
  | crossOrder                      | string   | integer  |
  | unit                            | string   | integer  |
  | forexBuying, forexSelling       | string   | float    |
  | banknoteBuying, banknoteSelling | string   | float    |
  | crossRateUSD                    | string   | float    |
  | crossRateOther                  | string   | float    |

## 1.0.1 (2022-09-03)

The type of exchange rates has been converted from Array to object. You no longer need to filter the exchangeRates array to reach the desired unit.

**example:**

```js
// before
exchangeRates: [
    0: {
        currencyCode: "USD"
    }
]

// after
exchangeRates: {
    usd: {
        currencyCode: "USD"
    }
}
```

## 1.0.0

Initial version.
