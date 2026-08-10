import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/homepage/home'
import Rock from './pages/rockpage/rock'
import FullDetailsPost from './pages/rockpage/rockPost/fullDetailsPost'
import Learn from './pages/learn/learn'
import Admin from './pages/admin/admin'
import UserProfile from './pages/user/userProfile'
import Result from './pages/others/result'
import Profile from './pages/user/userProfile'
import About from './pages/more/about'
import Contact from './pages/more/contact'
import SwingStockDetails from './pages/rockpage/rockSwingStock/swingStockDetails/stockDetails'
import RockAi from './pages/homepage/rockAi/rockAi'
import IpoDetails from './pages/rockpage/rockIpos/ipoDetails'
import Help from './pages/more/help'
import AddSwingStock from './pages/admin/addStock'
import LivePage from './pages/learn/dailyLive/livePage'
import { ImageOff } from 'lucide-react'
import UpdateIndexResult from './pages/admin/updateIndexResult'
import Journal from './pages/trade-journal/Journal'
import AddIndexPrice from './pages/admin/addIndexPrice'
import AddRockPost from './pages/admin/addRockPost'
import SingIn from './pages/user/singIn'
import AddUserData from './pages/user/addUserData'


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

    // general section 
     {
      path:"/journal",
      element:<><Journal></Journal></>
     },

    // learn section 
    {
      path:"/learn",
      element:<><Learn></Learn></>
    },
      {
      path:"/joinLIve",
      element:<><LivePage></LivePage></>
    },
    

    // user profile
    {
      path:"/profile",
      element:<><UserProfile></UserProfile></>
    },

    // login 
    {
      path:"/singIn",
      element:<><SingIn></SingIn></>
    },
    {
      path:"/addUserData",
      element:<><AddUserData></AddUserData></>
    },
 

    // admin pannel
    {
      path:"/admin",
      element:<><Admin></Admin></>
    },
    {
      path:"/addStock",
      element:<><AddSwingStock></AddSwingStock></>
    },
    {
      path:"/addResult",
      element:<><UpdateIndexResult></UpdateIndexResult></>
    },
    {
     path:"/addIndexPrice",
     element:<><AddIndexPrice></AddIndexPrice></>
    },

      {
      path:"/addPost",
      element:<><AddRockPost></AddRockPost></>
    },

 // user page
    {
      path:"/profile",
      element:<><Profile></Profile></>
    },

// more page    
  
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
    {
      path:"/help",
      element:<><Help></Help></>
    },




  ])

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
