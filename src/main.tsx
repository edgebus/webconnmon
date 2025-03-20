import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing_App from './landing_app.tsx'
import Admin_App from './admin_app.tsx'
import Progress_App from './progress_app.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_App />} />
        <Route path="/admin" element={<Admin_App />} />
        <Route path="/progress" element={<Progress_App/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
