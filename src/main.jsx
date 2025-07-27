import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import router from './Routes/Routes.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
