import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { GetState } from './context/SetState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GetState>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </GetState>
)
