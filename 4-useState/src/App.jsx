import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
  console.log("rendered")//USE STATE WILL CAUSE RE-RENDERING OF THE WHOLE COMPONENT
  return (
    <>
      <div>{count}</div>
      <button onClick={increase}>Increment</button>
    </>
  )
}

export default App
