import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './daisyui.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/Homepage';
import Books from './pages/books/Books';
import { router } from './routes/Routes';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,

  </StrictMode>,
)
