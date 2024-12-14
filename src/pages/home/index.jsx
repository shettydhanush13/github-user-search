import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import SearchHistory from '../history';
import GitHubUserSearch from '../search';
import Loader from '../../components/loader';
import './styles.scss';

const Home = () => {
  const [activePage, setActivePage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  const handleActivePage = (page) => {
    setIsLoading(true);
    setActivePage(page);
    setTimeout(() => {
        setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <Navbar activePage={activePage} handleActivePage={(page) => handleActivePage(page)}/> 
      {isLoading && <Loader/>}
      {!isLoading && activePage === 'home' && <GitHubUserSearch/>}
      {!isLoading && activePage === 'history' && <SearchHistory/>}
    </div>
  );
};

export default Home;
