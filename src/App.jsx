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
import axios from 'axios'
import Temperature from '../pages/temperature'

const temp = await axios.get('https://seppbp.pythonanywhere.com/temperature')
                .then(res => res.data)
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });

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
        <Route path='/temperature' element={<Temperature temp={temp.temperature}/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
