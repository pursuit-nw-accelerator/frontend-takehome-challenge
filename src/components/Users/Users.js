
import React, { useState } from "react";
import User from '../User/User';
import './Users.css';

const Users = ({ users = [] }) => {
  const [expanded, setExpanded] = useState([]);

  const handleExpandAll = () => {
    setExpanded(users.map((user) => user.id));
  };

  const handleCollapseAll = () => {
    setExpanded([]);
  };

  const toggleExpanded = (id) => {
    setExpanded((prevExpanded) => {
      if (prevExpanded.includes(id)) {
        return prevExpanded.filter((currId) => currId !== id);
      } else {
        return [...prevExpanded, id];
      }
    });
  };

  return (
    <div>
      <button onClick={handleExpandAll}>Expand All</button>
      <button onClick={handleCollapseAll}>Collapse All</button>

      <article className="Users">
        {users.map((user) => {
          const { id } = user;
          return (
            <User
              key={id}
              user={user}
              expanded={expanded.includes(id)}
              onClick={() => toggleExpanded(id)}
            />
          );
        })}
      </article>
    </div>
  );
};

export default Users;