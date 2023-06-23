import React from 'react'
import ReactDOM from 'react-dom/client'
import { VotingsProvider } from './context/index.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <VotingsProvider>
      <App />
    </VotingsProvider>
  </React.StrictMode>,
)
