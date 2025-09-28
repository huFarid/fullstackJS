import React from 'react'

const Content = ({Data}) => {
    var animals = [
        {name: "aa", species:"cat", count: 2},
        {name: "bb", species:"cat", count: 3},
        {name: "cc", species:"cat", count: 4},
        {name: "dd", species:"dog", count: 25},
        {name: "ee", species:"do" , count: 9},
        {name: "ff", species:"dog", count: 1},
    ]


    
    var cats = animals.filter(animal => animal.species === "cat")
    var TotalNumber = animals.map(animal => ({...animal,  count: animal.count*2})) 
     console.log(TotalNumber);
     
     
     return (
    <div>
      <p>{Data.Name}</p>
      <p>{Data.Family}</p>
      
    </div>
  )
}

export default Content
