import { useState, useEffect } from "react";
import User from "../User/User";
import "./Users.scss";

const Users = ({ users = [] }) => {
  const [expandedList, setExpandedList] = useState([]);

  const [expandAll, setExpandAll] = useState(false);

  const handleExpandedList = (id) => {
    if (!expandedList.includes(id)) {
      setExpandedList([...expandedList, id]);
    } else {
      setExpandedList(expandedList.filter((user) => user !== id));
    }
  };

  const handleExpandAll = () => {
    setExpandedList(users.map((user) => user.id));
  };

  const handleCollapseAll = () => {
    setExpandedList([]);
  };

  return (
    <article className="Users">
      <div className="expand-buttons">
        <button onClick={handleExpandAll}>Expand All</button>
        <button onClick={handleCollapseAll}>Collapse All</button>
      </div>

      {users.map((user) => {
        const { id } = user;
        return (
          <User
            key={id}
            user={user}
            handleExpandedList={expandedList.includes(id)}
            onClick={() => handleExpandedList(id)}
          />
        );
      })}
    </article>
  );
};

export default Users;
