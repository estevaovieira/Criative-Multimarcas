import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Páginas
import Home from './routes/Home'
import AddCarro from './routes/AddCarro'



const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/carros",
        element: <Home />
      },
      {
        path: "/novoCarro",
        element: <AddCarro />
      },
      {
        path: "/carros/:id",
        element: <AddCarro />
      }
    ], 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)