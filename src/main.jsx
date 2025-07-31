import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import router from './Routes/Routes.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ThemeProvider } from './ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
