import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GuestList from './components/GuestList.jsx'

const path = window.location.pathname;

let slug = null;
if (path.startsWith('/invitacion/')) {
  slug = path.replace('/invitacion/', '');
  if (slug.endsWith('/')) slug = slug.slice(0, -1);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/asistencia' ? <GuestList /> : <App slug={slug} />}
  </StrictMode>,
)
