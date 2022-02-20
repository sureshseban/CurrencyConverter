import axios from "axios";

const currencyConverter = async (toCurrency = 'USD', amount = 1) => {
    try {
        const access_key = '';
        const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${access_key}`;
        const { data } = await axios.get(url);
        const convertedAmount = amount * data.rates[toCurrency];

        return convertedAmount;
    } catch (error) {
        console.log(error);
    }
}

export default currencyConverter;