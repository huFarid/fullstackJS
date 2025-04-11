import React from 'react'
import Content from './Content'

const App = () => {

   const Data ={

    Name: "Hamed",
    Family:"Movahedi"
   }


  return (
    <div>
      <Content Data = {Data}></Content>
    </div>
  )
}

export default App
