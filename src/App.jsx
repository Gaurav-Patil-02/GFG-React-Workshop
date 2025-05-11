import {Routes, Route, NavLink} from 'react-router'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import AllProducts from './pages/AllProducts'
import Cart  from './pages/Cart'
import Layout from './components/Layout/Layout'

function App() {
  

  return (
      <Layout>
      <Routes>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/products' element = {<AllProducts/>}/>
      <Route path='/cart' element = {<Cart/>}/>
    </Routes>
   </Layout> 
  )
}

export default App
