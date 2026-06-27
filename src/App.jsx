import { useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/homepage/home'
import Rock from './pages/rockpage/rock'
import FullDetailsPost from './pages/rockpage/rockPost/fullDetailsPost'
import Learn from './pages/learn/learn'
import Login from './pages/others/login'
import Register from './pages/others/register'
import AddStock from './pages/admin/addStock'

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

    // learn section 
    {
      path:"/learn",
      element:<><Learn></Learn></>
    },

    // login 
      {
      path:"/login",
      element:<><Login></Login></>
    },
    {
      path:"/register",
      element:<><Register></Register></>
    },

    // admin pannel
    {
      path:"/addStock",
      element:<><AddStock></AddStock></>
    }


  ])

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
