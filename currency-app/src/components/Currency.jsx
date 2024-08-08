import "../css/Currency.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios"
import { useState } from 'react'

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_QRwsCBTgKGj7UMKeKZz3H8UWIfwLeyFqSn4iP7Qf"

function Currency() {
    const [amount, setAmount] = useState(10);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);
    //https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_QRwsCBTgKGj7UMKeKZz3H8UWIfwLeyFqSn4iP7Qf&base_currency=TRY
    const getCurrency = async () => {
        var currencies = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        var fromCurrencyAmount = currencies.data.data[toCurrency] * amount
        setResult(fromCurrencyAmount.toFixed(2))
    }
    return (
        <div className='currency-div'>
            <div className="header-container">
                <h2 >CURRENCY APP</h2>
            </div>
            <div className="input-container">
                <input
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    type='number' className='amount' />
                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='TRY'>TL </option>
                </select>
                <FaRegArrowAltCircleRight style={
                    {
                        fontSize: '24px',
                        color: 'black',
                        marginRight: "10px",
                    }
                } />
                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option value='TRY'>TL </option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                </select>
                <input type='number' className='result' value={result} />
            </div>
            <div>
                <button onClick={getCurrency} className="convert-button">CONVERT</button>
            </div>
        </div >
    )
}

export default Currency