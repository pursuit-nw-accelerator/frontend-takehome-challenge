import { useState } from 'react';
import User from '../User/User';
import './Users.css';

const Users = ({ users = [] }) => {
  const [expanded, setExpanded] = useState([]);

  const toggleExpanded = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter((currId) => currId !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  };

  const expandAll = () => {
    const allUserIds = users.map((user) => user.id);
    setExpanded(allUserIds);
  };

  const collapseAll = () => {
    setExpanded([]);
  };

  return (
    <article className="Users">
      <button className="expand_button" onClick={expandAll}>
        Expand All
      </button>
      <button className="collapse_button" onClick={collapseAll}>
        Collapse All
      </button>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          expanded={expanded.includes(user.id)}
          onClick={() => toggleExpanded(user.id)}
        />
      ))}
    </article>
  );
};

export default Users;
