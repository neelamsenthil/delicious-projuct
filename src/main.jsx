import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoredContextProvider from './UseContext-Component/StoreContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoredContextProvider>
      
      <App />

    </StoredContextProvider>


  </BrowserRouter>
)
