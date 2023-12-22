import React, {useId} from "react";


function Inputbox({ 
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisalble = false,
        currencyDisable = false,
        className = ""

 }) {
        const amountInputId = useId()

    return (
            <div className=" w-11/12 sm:w-3/4 bg-white shadow-inner px-5 py-6 mx-auto rounded-lg z-0">
                    <div className=" w-full flex justify-between items-center">
                        <div className=" w-3/4 flex flex-col gap-y-2">
                            <label htmlFor={amountInputId} className=" text-lg font-semibold text-gray-400">
                                {label}
                            </label>
                            <input  id={amountInputId}
                                className=" w-3/4 sm:w-2/4 border-b-2 rounded-md px-2 py-1"
                                type="number"
                                value={amount}
                                disabled={amountDisalble}
                                onChange={(e) => onAmountChange && onAmountChange(e.target.value)} />
                        </div>
                        <div className=" w-2/5 sm:w-1/4 flex flex-col gap-y-2">
                            <label className=" text-lg font-semibold text-gray-400">
                                Currency:
                            </label>
                            <select className=" border-b-2 rounded-md px-2 py-1"
                                value={selectCurrency}
                                disabled={currencyDisable}
                                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>

                                {currencyOptions.map((currency) => (
                                    <option key={currency} value={currency}>
                                        {currency.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
            </div>
    )
}

export default Inputbox;