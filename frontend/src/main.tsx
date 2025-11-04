import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from 'react-router'
import './styles.css'
import App from './App.tsx'
import Register from './components/Register.tsx'
import Login from './components/Login.tsx'
import { Comment } from './components/Comment.tsx'
import { Profile } from "./components/Profile.tsx"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages/:comment" element={<Comment />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
