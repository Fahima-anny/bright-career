import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<HelmetProvider>
<RouterProvider router={Routes} />
</HelmetProvider>
<ToastContainer
 position="top-center"
 autoClose={2000}
 />
</AuthProvider>
  </StrictMode>,
)
