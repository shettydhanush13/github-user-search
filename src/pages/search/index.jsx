import React, { useState } from 'react';
import UserCard from '../../components/userCard';
import Loader from '../../components/loader';
import { fetchUserInfo } from '../../helpers/services';
import { saveToHistory } from '../../helpers/utils';
import './styles.scss';

const GitHubUserSearch = () => {
  const [username, setUsername] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if(username === '') alert('Username can not be empty');
    else {
      try {
        setIsLoading(true);
        const userInfo = await fetchUserInfo(username);
        saveToHistory(username, userInfo);
        setSearchResult(userInfo);
      } catch (error) {
        saveToHistory(username, null);
        setSearchResult('no result');
      } finally {
        setUsername('');
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="search-section">
      <h2>Discover a Developer</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter GitHub username here..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      {isLoading ? <Loader/> : <>
        {searchResult && (
          searchResult === 'no result' ?
          <h3 className='userNotFound'>No User Found!</h3>
          : <div className="search-result">
            <h4>Search Result</h4>
            <UserCard searchResult={searchResult}/>
          </div>
        )}
      </>}
    </div>
  );
};

export default GitHubUserSearch;
