import User from '../User/User';
import './Users.css';

import { useState } from "react";

const Users = ({ users = [], expanded, setExpanded }) => {

  const toggleExpand = (id) => {
    if (expanded.includes(id)) {
      const newExpanded = expanded.filter((currID) => currID !== id);
      setExpanded(newExpanded);
    } else {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    }
  };

  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return <User key={id} user={user} expanded={expanded.includes(user.id)} onClick={() => toggleExpand(user.id)} />;
      })}
    </article>
  );
};

export default Users;
