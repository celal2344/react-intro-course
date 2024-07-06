import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

const BASE_URL = 'http://localhost:3005'

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + '/users')
    console.log(response)
  }
  const getUserById = async (id) => {
    const response = await axios.get(BASE_URL + '/users/' + id)
    console.log(response)
  }
  const createUser = async (newUser) => {
    const response = await axios.post(BASE_URL + '/users', newUser)
    console.log(response)
  }
  const updateUser = async (id, updatedUser) => {
    const response = await axios.put(BASE_URL + '/users/' + id, updatedUser)
    console.log(response)
  }
  const deleteUser = async (id) => {
    const response = await axios.delete(BASE_URL + '/users/' + id)
    console.log(response)
  }
  useEffect(() => {
    createUser({
      "name": "celal",
      "password": "123456",
    });
  }, [])

  return (
    <>

    </>
  )
}

export default App
