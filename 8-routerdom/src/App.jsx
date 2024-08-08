import { Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="employee" element={<EmployeeAbout />} />
          <Route path="company" element={<CompanyAbout />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
