import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] = useState(0)


  return (
    <>
    <h1>Give feedback</h1>
      <button onClick={()=>setGoodCount(goodCount+1)}> good </button>
      <button onClick={()=>setNeutralCount(neutralCount+1)}> nuetral </button>
      <button onClick={()=>setBadCount(badCount+1)}> bad </button>

      <h2>Statistics</h2>

      <p>good</p>
      <p >{goodCount}</p>
      <p>neutral</p>
      <p>{neutralCount}</p>
      <p>bad</p>
      <p>{badCount}</p>
     
     
    </>
  )
}

export default App
