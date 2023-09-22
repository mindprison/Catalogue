/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
const learn = {
  learner:"I'm learning",
  title:"React"
}

function App() {
  return (
    <div>
      <h1>{learn.learner} {learn.title}</h1>
      <label htmlFor="search" >Search Here</label><br/>
      <input type="text" id="search" placeholder="it doesn't work yet"/>
    </div>
  )
}

export default App
