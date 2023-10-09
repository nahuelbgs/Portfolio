import React from 'react'
import { usePortfolioContext } from '../../context/PortfolioContext';
import './Switch.css'

function Switch() {
    const { darkMode, setDarkMode } = usePortfolioContext();
    const handleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  return (
    <label className="switch">
        <input value={darkMode} onClick={handleDarkMode} type="checkbox" />
        <span className={darkMode === false ? `slider sliderLight` : `slider sliderDark`}>
        </span>
      </label>
  )
}

export default Switch