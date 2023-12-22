import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home/Home';
import Register from './Components/Navbar/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import AddNewTask from './Components/Dashboard/AddNewTask/AddNewTask';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import PreviousTask from './Components/Dashboard/PreviouTask/PreviousTask';
import Login from './Components/Navbar/Login/Login';
import AuthProviders from './Components/AuthProviders/AuthProviders';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      }


    ]
  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
        
         {
          path:"/dashboard/newTask",
          element:<AddNewTask></AddNewTask>
         },
         {
          path:"/dashboard/previous",
          element:<PreviousTask></PreviousTask>
         }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <AuthProviders>
   <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
    </QueryClientProvider>
   </AuthProviders>
  </React.StrictMode>,
)
