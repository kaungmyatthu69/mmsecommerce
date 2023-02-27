import React from 'react'
import './loader.css'

const Loader = () => {
    return (
        
        <div className="loading-container">
        <div className="spinner"></div>
        <div className="spinner-center"></div>
        <div className="loading-text">Loading...</div>
      </div>
        
    )
}

export default Loader