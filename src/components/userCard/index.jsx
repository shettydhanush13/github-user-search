import React from 'react';
import './styles.scss';

const UserCard = ({ searchResult }) => {
  const { name, bio, location, html_url, avatar_url, login } = searchResult;

  return (
    <div className="result-card">
      <div className="user-image">
        <img src={avatar_url} alt={`${login}'s avatar`} className="avatar" />
      </div>

      <div className="user-info">
        <h3>{name || login}</h3>
        <p><strong>@{login}</strong>{location && <strong> | {location}</strong>}</p>
        {bio && <p><strong></strong> {bio}</p>}
        <div className="links">
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
