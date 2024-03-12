import React from 'react';
import User from '../User/User';
import './Users.css';

const Users = ({ users = [], expandedUser, expandAll, toggleExpanded }) => {
  return (
    <article className="Users">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          isExpanded={expandAll || expandedUser === user.id}
          toggleExpanded={() => toggleExpanded(user.id)}
        />
      ))}
    </article>
  );
};

export default Users;

