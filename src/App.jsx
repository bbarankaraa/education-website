import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/About/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/hakkimizda' element={<AboutPage />} />
    </Routes>
      <Footer />
    </>
  )
}

export default App
