import React from 'react'

function Content({contentInfo}) {
  return (
    <div>

      <p>
        {contentInfo.part1} {contentInfo.exercises1}
      </p>
      <p>
        {contentInfo.part2} {contentInfo.exercises2}
      </p>
      <p>
        {contentInfo.part3} {contentInfo.exercises3}
      </p>
      
    </div>
  )
}

export default Content
