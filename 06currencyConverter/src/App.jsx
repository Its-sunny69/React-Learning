import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { Inputbox } from './components'

import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => setConvertedAmount(amount * currencyInfo[to]);


  return (
    <div className='w-full h-screen flex justify-center items-center font-mono' 
    style={{backgroundImage: "url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
      <div className=' w-full md:w-4/5 lg:w-3/6 backdrop-blur-lg py-7 mx-4 md:mx-0 rounded-lg shadow-xl'>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert()
        }}
          className='w-full flex justify-center items-center flex-col relative gap-y-3 '>

          <Inputbox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => { setAmount(amount) }} />
          
            <button className=' bg-black text-white w-fit py-2 px-3 rounded-md z-20 absolute shadow-lg hover:bg-gray-700'
            style={{top: "35%"}}
              onClick={swap}
              type='button'> swap </button>
          

          <Inputbox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable />

          <button className=' bg-black w-fit py-2 px-3 text-white rounded-md shadow-lg hover:bg-gray-700' 
            type='submit'
          > Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
        </form>
      </div>
    </div>
  )
}

export default App
