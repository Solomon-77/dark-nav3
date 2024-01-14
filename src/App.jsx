import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Docs from './pages/Docs'

const App = () => {

  const saveTheme = () => {
    return JSON.parse(localStorage.getItem('darkMode')) || false
  }
  const [darkMode, setDarkMode] = useState(saveTheme)

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const [overFlow, setOverflow] = useState(false)

  return (
    <div className={`absolute h-screen w-full overflow-auto ${darkMode ? 'dark' : ''} ${overFlow ? 'overflow-hidden' : ''}`}>

      <BrowserRouter>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} overFlow={overFlow} setOverflow={setOverflow}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/' element={<About />} />
          <Route path='/docs/' element={<Docs />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App