import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    console.log("works everytime")
  })
  useEffect(() => {
    console.log("works when the component is rendered for the first time")
  }, [])
  useEffect(() => {
    console.log("works only when firstName changes and the component is rendered for the first time")
  }, [firstName])
  useEffect(() => {
    console.log("works only when lastName changes and the component is rendered for the first time")
  }, [lastName])
  return (
    <>
      {firstName}
      {lastName}
      <div>
        <button onClick={() => setFirstName('John')}>Set First Name to John</button>
        <button onClick={() => setLastName('Doe')}>Set Last Name to Doe</button>
      </div>
    </>
  )
}

export default App
