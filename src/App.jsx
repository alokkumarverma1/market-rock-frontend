import { useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/homepage/home'
import Rock from './pages/rockpage/rock'

function App() {
 
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home></Home></>
    },
     {
      path:"/rock",
      element:<><Rock></Rock></>
    }
  ])

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
