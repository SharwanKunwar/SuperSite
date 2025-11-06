import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import All from './components/categories components/All.jsx'
import DashboardCategoriesDefaultPage from './components/categories components/DashboardCategoriesDefaultPage.jsx'
import DeveloperTools from './components/categories components/DeveloperTools.jsx'
import Design from './components/categories components/Design.jsx'
import Entertainment from './components/categories components/Entertainment.jsx'

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
        path:"developerTools",
        element: <DeveloperTools/>
      },
      {
        path:"design",
        element:<Design/>
      },
      {
        path:"entertainment",
        element: <Entertainment/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
