import { useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/homepage/home'
import Rock from './pages/rockpage/rock'
import FullDetailsPost from './pages/rockpage/rockPost/fullDetailsPost'

function App() {
 
  const router = createBrowserRouter([

    // home page
    {
      path:"/",
      element:<><Home></Home></>
    },
     {
      path:"/rock",
      element:<><Rock></Rock></>
    },

    // rock page

    {
      path:"/rock",
      element:<><Rock></Rock></>
    },
      {
      path:"/rockPostDetails",
      element:<><FullDetailsPost></FullDetailsPost></>
    },

  ])

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
