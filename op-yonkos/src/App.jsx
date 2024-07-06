import './App.css'
import Header from './Header'
import { yonkos } from './Data'
import Yonko from './components/Yonko'
function App() {
  return (
    <>
      <Header />

      <div className="yonkoContainer">
        {
          yonkos?.map((yonko) => (
            <Yonko key={yonko.id} yonko={yonko} />
          ))
        }
      </div>

    </>
  )
}

export default App
