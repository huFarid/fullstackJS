import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Statistics = ({goodCount, neutralCount, badCount})=>
{

  return(
  <>
      <h2>Statistics</h2>

      <p>good</p>
      <p >{goodCount}</p>
      <p>neutral</p>
      <p>{neutralCount}</p>
      <p>bad</p>
      <p>{badCount}</p>
      <p>all</p>
      <p>{goodCount + neutralCount + badCount}</p>
      <p>average</p>
      <p>{goodCount + neutralCount + badCount > 0 ? (goodCount-badCount)/(goodCount+neutralCount+badCount) : 0}</p>
      <p>positive</p>
      <p>{goodCount + neutralCount + badCount > 0 ? (goodCount/(goodCount+neutralCount+badCount))*100 : 0} %</p>
         

  
  </>
  )
}



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

     <Statistics badCount = {badCount} neutralCount = {neutralCount} goodCount = {goodCount} />
    </>
  )
}

export default App
