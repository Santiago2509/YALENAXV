import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GuestList from './components/GuestList.jsx'

const path = window.location.pathname;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/asistencia' ? <GuestList /> : <App />}
  </StrictMode>,
)
