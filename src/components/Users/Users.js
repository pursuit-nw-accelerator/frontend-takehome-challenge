import { useState } from "react";
import User from "../User/User";
import "./Users.css";

const Users = ({ users, clickedButtons }) => {
  const [expandedArray, setExpandedArray] = useState([]);

  const toggleExpanded = (id) => {
    if (expandedArray.includes(id)) {
      const filteredIdArray = expandedArray.filter(
        (expandedId) => expandedId !== id
      );
      setExpandedArray(filteredIdArray);
    } else {
      setExpandedArray([...expandedArray, id]);
    }
  };

  const expandAll = () => {
    const all_Users_Id = [];
    users.forEach((user) => all_Users_Id.push(user.id));
    setExpandedArray(all_Users_Id);
  };

  const collapseAll = () => {
    setExpandedArray([]);
  };

  let usersToDisplay = [...users];

  if (clickedButtons.length > 0) {
    usersToDisplay = [];
    users.forEach((user) => {
      let count = 0;
      for (let button of clickedButtons) {
        if (user.hobbies.includes(button)) {
          count++;
        }
      }
      if (count === clickedButtons.length) {
        usersToDisplay.push(user);
      }
    });
  }

  const noUsersFound = clickedButtons.join(", ");

  return (
    <div className="users">
      <div className="buttons">
        <button onClick={() => expandAll()}>Expand All</button>
        <button onClick={() => collapseAll()}>Collapse All</button>
      </div>
      <article>
        {usersToDisplay.map((user) => {
          const { id } = user;
          return (
            <User
              key={id}
              user={user}
              toggleExpanded={toggleExpanded}
              expanded={expandedArray.includes(id)}
            />
          );
        })}
        {usersToDisplay.length === 0 && (
          <p>No users match the filter: {noUsersFound}.</p>
        )}
      </article>
    </div>
  );
};

export default Users;
