
import React from 'react';
import './User.css';

const User = ({ expanded, onClick, user }) => {
  const { about, age, company, country, name, photo } = user;

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
        </ul>
        <div className="User__about">
          <h3>About {name.split(' ')[0]}:</h3>
          {expanded && <p>{about}</p>}
        </div>
      </div>
      <div className="User__controls">
        <button className="toggleButton" onClick={onClick}>
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
};

export default User;
