import { StrictMode } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import Jobs from './components/Jobs/Jobs';
import ErrorElement from './components/ErrorElement/ErrorElement';
import JobDetails from './components/jobDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: ()=> fetch('../jobs.json')
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
