import React from 'react';
import User from '../User/User';
import './Users.css';

const Users = ({ users = [], expandedUser, toggleExpanded }) => {
  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return (
          <User
            key={id}
            user={user}
            isExpanded={expandedUser === id}
            toggleExpanded={() => toggleExpanded(id)}
          />
        );
      })}
    </article>
  );
};

export default Users;
