import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bgbutton from './components/bgbutton'

function App() {
  const [color, setColor] = useState('cyan');

  return (
    <div className='w-full h-screen duration-300'
      style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap inset-x-0 bottom-10 justify-center'>
        <div className='flex flex-wrap justify-center gap-3 p-2 rounded-2xl shadow-xl bg-white'>

          <Bgbutton colorname={"red"} btntext={"Red"} changeFnc={() => {setColor("red")}}/>
          <Bgbutton colorname={"green"} btntext={"Green"} changeFnc={() => {setColor("green")}}/>
          <Bgbutton colorname={"yellow"} btntext={"Yellow"} changeFnc={() => {setColor("yellow")}}/>
          <Bgbutton colorname={"olive"} btntext={"Olive"} changeFnc={() => {setColor("olive")}}/>
          <Bgbutton colorname={"grey"} btntext={"Grey"} changeFnc={() => {setColor("grey")}}/>
          <Bgbutton colorname={"pink"} btntext={"Pink"} changeFnc={() => {setColor("pink")}}/>
          <Bgbutton colorname={"purple"} btntext={"Purple"} changeFnc={() => {setColor("purple")}}/>
          <Bgbutton colorname={"lavender"} btntext={"Lavender"} changeFnc={() => {setColor("lavender")}}/>
          <Bgbutton colorname={"white"} btntext={"White"} changeFnc={() => {setColor("white")}}/>
          <Bgbutton colorname={"black"} btntext={"Black"} changeFnc={() => {setColor("black")}}/>
          
        </div>
      </div>
    </div>
  )
}

export default App
