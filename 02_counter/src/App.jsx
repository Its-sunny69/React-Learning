import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    // counter = counter + 1
    if ((counter + 1) <= 20) setCounter(counter + 1);
    // console.log("clicked", (counter + 1));
  }

  const removeValue = () => {
    // counter = counter - 1
    if ((counter - 1) >= 0) setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai or Code</h1>
    <h3>Counter: {counter}</h3>
    <button onClick={addValue}>Add: {counter}</button>
    <br />
    <button onClick={removeValue}>Remove: {counter}</button>
    </>
  )
}

export default App
