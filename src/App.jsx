import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/Login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<Navigate to={'/'}/>} />

    </Routes>
    <Footer/>
    </>
  )
}

export default App
