import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [color,setColor]=useState("");
  document.body.style.backgroundColor=color

  return (
    <>
   <button onClick={function(){
    if(color==="") setColor("navajowhite");
    else setColor("");
   }}>Switch Theme</button>
    </>
  )
}

export default App
