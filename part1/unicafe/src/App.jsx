import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const StatisticLine = ({text, value})=>
  {
    return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }

const Statistics = ({goodCount, neutralCount, badCount})=>
{
  const all  = goodCount + neutralCount + badCount
  const average = all > 0 ? ((goodCount - badCount) / all).toFixed(2) :0
  const positive = all > 0 ? ((goodCount / all) * 100).toFixed(2) : 0
  return(
  <>
      <h2>Statistics</h2>
<table>
  <tbody>
     <StatisticLine text="good" value={goodCount} />
      <StatisticLine text="neutral" value={neutralCount} />
      <StatisticLine text="bad" value={badCount} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + " %"} />
  </tbody>
</table>


   
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
     
     {(goodCount + neutralCount + badCount) > 0 ? 
     <Statistics badCount = {badCount} neutralCount = {neutralCount} goodCount = {goodCount} /> 
     : 
      <p>No feedback given</p>
     }
    </>
  )
}

export default App
