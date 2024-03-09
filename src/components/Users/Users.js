import React from 'react';
import User from '../User/User';
import './Users.css';

const Users = ({ users = [], expanded, toggleExpanded }) => {
  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return <User key={id} user={user} expanded={expanded} toggleExpanded={toggleExpanded} />;
      })}
    </article>
  );
};

export default Users;
