import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
])