# Changelog

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
