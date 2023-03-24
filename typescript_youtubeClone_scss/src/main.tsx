import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { UiChangeContextProvider } from './context/uiChangeContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter >
    <UiChangeContextProvider>
 
      <App />
   
    </UiChangeContextProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
)
