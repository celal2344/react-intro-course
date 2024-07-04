// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let nameList = ['a', 'b', 'c'];
  return (
    <div>
      {
        nameList.map((name, index) => (
          <div style={{
            color: 'red',
            fontSize: '20px'

          }} key={index}>{name}</div>
        ))
      }
    </div>
  )
}
export default App
