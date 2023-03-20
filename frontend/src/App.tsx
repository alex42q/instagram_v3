import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import socketIOClient from "socket.io-client";

const endpoint = "http://localhost:5000";

function App() {

  useEffect(() =>{
    const socket = socketIOClient(endpoint);
  }, [])

  return (
    <div className="App">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
