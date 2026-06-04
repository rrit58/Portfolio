import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster
      position="bottom-right"
      theme="dark"
      richColors
      toastOptions={{
        duration: 3000,
        classNames: {
          toast: "custom-toast",
        },
      }}
    />
  </StrictMode>,
)
