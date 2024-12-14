import React, { useEffect, useState } from 'react';
import UserCard from '../../components/userCard';
import { getFromHistory, clearHistoryData } from '../../helpers/utils';
import './styles.scss';

const SearchHistory = () => {
  const [history, setHistory] = useState([]);

  const clearHistory = () => {
    setHistory([]);
    clearHistoryData();
  };

  useEffect(() => {
    const searchHistory = getFromHistory();
    setHistory(searchHistory);
  }, []);

  return (
    <div className="history-container">
      <h2>Hacker’s History</h2>
      <div className="history-table">
        <div className="table-header">
          <span>Search Term</span>
          <span>Search Results</span>
        </div>
        {history.length > 0 ? (
          history.map((entry, index) => (
            <div className="table-row" key={index}>
              <div className="search-term">{entry.term}</div>
              <div className="search-result">
                {entry.result ? (
                  <UserCard searchResult={entry.result}/>
                ) : (
                  <div className="no-result">Search result not found</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-history">No search history available</div>
        )}
      </div>

      <button className="clear-button" onClick={clearHistory}>
        Clear Search History
      </button>
    </div>
  );
};

export default SearchHistory;
