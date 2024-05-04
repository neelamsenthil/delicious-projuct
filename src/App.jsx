import { useState } from 'react'
import './App.css'
import Nav from './Nav-Component/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.Component/Home'
import Cart from './Cart-Component/Cart'
import PlaceOrder from './Place Order-Component/PlaceOrder'
import Footer from './Footer-Component/Footer'
import Login from './Login-Component/Login'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
    <div className='app'>
      <Nav setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />}/>


      </Routes>
    </div>
    <Footer />

    </>
  )
}

export default App
