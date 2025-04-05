import React from 'react'

function Total({totalInfo}) {
  return (
    <div>
      <p>Number of exercises {totalInfo.exercises1 + totalInfo.exercises2 + totalInfo.exercises3}</p>
    </div>
  )
}

export default Total
