import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemProvider from './context/ThemeContext'
import "./output.css"
import NavigationProvider from './context/NavigationContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </ThemProvider>
  </React.StrictMode>,
)
