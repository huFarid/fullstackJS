import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const contentInfo = {part1, part2, part3, exercises1, exercises2, exercises3}
  const totalInfo =  {exercises1, exercises2, exercises3}
  return (
    <div>
      <Header course ={course}></Header>
      <Content  contentInfo = {contentInfo}></Content>
      <Total totalInfo ={totalInfo} ></Total>
    </div>
  )
}
export default App
