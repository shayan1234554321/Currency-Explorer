export const currenciesAPI = () => {
    return "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
}

export const currencyAPI = (countryCode) => {
    return `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryCode}.json`
}