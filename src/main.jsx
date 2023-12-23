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
import UpdateTask from './Components/Dashboard/PreviouTask/UpdateTask/UpdateTask';
import Welcome from './Components/Welcome/Welcome';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';

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
      },
      {
        path:"/update/:_id",
        element:<UpdateTask></UpdateTask>,
        loader:()=>fetch('https://task-hub-server-six.vercel.app/tasks')
      }


    ]
  },
  {
    path:"/dashboard",
    element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children:[
        
         {
          path:"/dashboard/newTask",
          element:<PrivateRoutes><AddNewTask></AddNewTask></PrivateRoutes>
         },
         {
          path:"/dashboard/previous",
          element:<PrivateRoutes><PreviousTask></PreviousTask></PrivateRoutes>
         },
         {
          path:"/dashboard/welcome",
          element:<Welcome></Welcome>
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
