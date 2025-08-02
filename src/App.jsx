import { useState } from 'react'
import { GlobalContext } from '../context'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import { router } from '../routes'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
    {/* <RouterProvider router={router}/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
