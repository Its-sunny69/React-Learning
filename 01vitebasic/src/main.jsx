import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*
function Myapp() {
  return (
    <h1>Hello World</h1>
  )
} */

/*
const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children : 'click me to visit google.com'
} */

const anotherElement = (
  <a href="https://google.com" target="_blank">google.com</a>
)

const anotheruser = "chai or code"
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
      target: '_blank'
  },
  'click me to visit google.com',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement

)
