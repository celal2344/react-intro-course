import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'
import UserList from './UserList';

function App() {
  return (
    <div>
      <UserList />
    </div>
  )
}

export default App
