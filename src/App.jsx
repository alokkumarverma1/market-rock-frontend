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
import About from './pages/more/about'
import Contact from './pages/more/contact'
import SwingStockDetails from './pages/rockpage/rockSwingStock/swingStockDetails/stockDetails'
import RockAi from './pages/homepage/rockAi/rockAi'
import IpoDetails from './pages/rockpage/rockIpos/ipoDetails'

function App() {
 
  const router = createBrowserRouter([

    // home page
    {
      path:"/",
      element:<><Home></Home></>
    },
     {
      path:"/rockAi",
      element:<><RockAi></RockAi></>
    },

    // rock page

    {
      path:"/rock",
      element:<><Rock></Rock></>
    },
    {
      path:"/swingStockDetails",
      element:<><SwingStockDetails></SwingStockDetails></>
    },
      {
      path:"/rockPostDetails",
      element:<><FullDetailsPost></FullDetailsPost></>
    },
    {
      path:"/ipoDetails",
      element:<><IpoDetails></IpoDetails></>
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
    },
     {
      path:"/about",
      element:<><About></About></>
    },
     {
      path:"/contact",
      element:<><Contact></Contact></>
    },




  ])

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
