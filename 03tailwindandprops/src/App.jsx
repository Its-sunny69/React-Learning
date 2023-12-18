import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    name: "sunny",
    age: 20
  }

  let newArr = {
    arr: [5,6,7]
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-md m-5">Tailwind</h1>

      <Card username="chai or code" someObj={myObj} btntext="Visit me"/>
      <Card username="Samsung" someObj={newArr}/>
    </>
  )
}

export default App
