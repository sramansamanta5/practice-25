import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Progressbar from './components/Progressbar/Progressbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Progressbar/>
    <App />
  </React.StrictMode>,
)
