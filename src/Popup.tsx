import React from 'react'
import ReactDOM from 'react-dom/client'

const Popup = () => {
  return (
    <div>Popup</div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.createRoot(root).render(<Popup />)