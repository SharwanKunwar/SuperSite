import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import All from './components/categories components/All.jsx'
import DashboardCategoriesDefaultPage from './components/categories components/DashboardCategoriesDefaultPage.jsx'
import Entertainment from './components/categories components/Entertainment.jsx'
import DevelopmentTools from './components/categories components/DevelopmentTools.jsx'
import DesignInspiration from './components/categories components/DesignInspiration.jsx'
import AiTools from './components/categories components/AiTools.jsx'
import Productivity from './components/categories components/Productivity.jsx'
import Explore from './pages/Explore.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"dashboard",
        element:<Dashboard/>,
      },
      {
        index: true,
        element:<DashboardCategoriesDefaultPage/>
      },
      {
        path:"all",
        element:<All/>
      },
      {
        path:"developmentTools",
        element: <DevelopmentTools/>
      },
      {
        path:"designInspiration",
        element:<DesignInspiration/>
      },
      {
        path: "ai",
        element: <AiTools/>
      },
      {
        path:"productivity",
        element: <Productivity/>
      },
      {
        path:"entertainment",
        element: <Entertainment/>
      }
    ]
  },
  {
    path: "explore",
    element: <Explore/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
