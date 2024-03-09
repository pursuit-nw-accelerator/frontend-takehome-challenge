import React from 'react';
import './User.css';

const User = ({ user, isExpanded, toggleExpanded }) => {
  const {  age, company, country, name, photo, about, hobbies } = user;

  return (
    <section className="User">
      <div className="User__avatar">
        <img src={photo} alt={name} />
      </div>
      <div className="User__info">
        <ul>
          <li className="User__name">{name}</li>
          <li>Age: {age}</li>
          <li>Country: {country}</li>
          <li>Company: {company}</li>
          <li>Hobbies: {hobbies.join(', ')}</li>
        </ul>
        {isExpanded && (
          <div className="User__details">
            <h3>About {name.split(' ')[0]}:</h3>
            <p>{about}</p>
          </div>
        )}
      </div>
      <div className="User__controls">
        <button onClick={toggleExpanded}>{isExpanded ? 'Show Less' : 'Show More'}</button>
      </div>
    </section>
  );
};

export default User;
