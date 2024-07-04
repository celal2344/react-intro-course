import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const products = [
    { productName: 'Ayakkabı', price: 3200 },
    { productName: 'Bilgisayar', price: 8000 },
    { productName: 'Telefon', price: 5000 },
  ]
  var product = products[0]
  return (
    <>
      <div>PRODUCTS</div>
      <hr />


      {products.map((product, index) => (
        <Container key={index}>
          < Product key={index} productName={product.productName} price={product.price} />
        </Container>
      ))}
    </>
  )
}
export default App
