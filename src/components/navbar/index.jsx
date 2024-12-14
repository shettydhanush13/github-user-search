import React from 'react';
import './styles.scss';

const Navbar = ({ activePage, handleActivePage }) => {
  const handleNavigation = (page) => {
    handleActivePage(page);
  };

  return (
    <nav className="navbar">
      <span className='logo'>GitHub User Explorer</span>
      <span 
        className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
        onClick={() => handleNavigation('home')}
      >
        Home
      </span>
      <span 
        className={`nav-item ${activePage === 'history' ? 'active' : ''}`}
        onClick={() => handleNavigation('history')}
      >
        History
      </span>
    </nav>
  );
};

export default Navbar;
