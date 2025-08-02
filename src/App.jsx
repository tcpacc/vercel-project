import { useState } from 'react'
import { GlobalContext } from '../context'
import { RouterProvider } from 'react-router-dom'
import { router } from '../routes'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
    <GlobalContext.Provider value={"da"}>
      <RouterProvider router={router}/>
    </GlobalContext.Provider>

    </>
  )
}

export default App
