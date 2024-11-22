import axios from "axios";



// https://v6.exchangerate-api.com/v6/a3a1e94abde08dae469e669a/latest/USD

const api = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/a3a1e94abde08dae469e669a",
})

// we need to create a get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`)
};