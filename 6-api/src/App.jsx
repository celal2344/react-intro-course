import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

const BASE_URL = 'http://localhost:3005'

function App() {
  // const getAllUsers = async () => {
  //   const response = await axios.get(BASE_URL + '/users')
  //   console.log(response)
  // }
  // const getUserById = async (id) => {
  //   const response = await axios.get(BASE_URL + '/users/' + id)
  //   console.log(response)
  // }
  // const createUser = async (newUser) => {
  //   const response = await axios.post(BASE_URL + '/users', newUser)
  //   console.log(response)
  // }
  // const updateUser = async (id, updatedUser) => {
  //   const response = await axios.put(BASE_URL + '/users/' + id, updatedUser)
  //   console.log(response)
  // }
  // const deleteUser = async (id) => {
  //   const response = await axios.delete(BASE_URL + '/users/' + id)
  //   console.log(response)
  // }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + '/users/' + userId);
    return response.data.postId;
  }
  const getPostById = async (postId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return response.data;
  }
  const getPost = async () => {
    const postId = await getUserById(1);
    console.log(postId)
    const post = await getPostById(postId);
    console.log(post)
  }


  useEffect(() => {
    getPost()
  }, [])

  return (
    <>

    </>
  )
}

export default App
