
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Admin from './components/Admin'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import LayoutAdmin from './components/LayoutAdmin'
import User from './components/admin/User'
import Product from './components/admin/Product'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />

        </Route>
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route path='user' element={<User />} />
          <Route path='product' element={<Product />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
