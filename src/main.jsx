import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Yeh comment karo ya hata do
// import React from 'react' // ← React import bhi hata sakte ho

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode hatao
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  
  // Bas direct render karo
  <App />
)