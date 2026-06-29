import { useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/homepage/home'
import Rock from './pages/rockpage/rock'
import FullDetailsPost from './pages/rockpage/rockPost/fullDetailsPost'
import Learn from './pages/learn/learn'
import Register from './pages/user/register'
import Login from './pages/user/login'
import AddStock from './pages/admin/addStock'
import Admin from './pages/admin/admin'
import UserProfile from './pages/user/userProfile'
import Result from './pages/others/result'
import Profile from './pages/user/userProfile'

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

    // user profile
    {
      path:"/profile",
      element:<><UserProfile></UserProfile></>
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
      path:"/admin",
      element:<><Admin></Admin></>
    },
    {
      path:"/addStock",
      element:<><AddStock></AddStock></>
    },

 // other page
    {
      path:"/profile",
      element:<><Profile></Profile></>
    },
    {
      path:"/result",
      element:<><Result></Result></>
    }



  ])

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
