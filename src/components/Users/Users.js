import User from "../User/User";
import "./Users.css";
import { useState } from "react";

const Users = ({ users = [], hobbies }) => {
  const [toggleAbout, setToggleAbout] = useState([]);

  const handleExpandAbout = (id) => {
    if (toggleAbout.includes(id)) {
      setToggleAbout(toggleAbout.filter((currId) => currId !== id));
    } else {
      setToggleAbout([...toggleAbout, id]);
    }
  };

  const handleExpandAll = () => {
    const newExpanded = users.map((user) => user.id);
    setToggleAbout(newExpanded);
  };

  const handleCollapseAll = () => {
    setToggleAbout([]);
  };

  const renderContent = () => {
    if (users.length === 0) {
      return <p>No users match the filters: {hobbies.join(", ")}</p>;
    } else {
      return users.map((user) => {
        const { id } = user;
        return (
          <User
            key={id}
            user={user}
            toggleAbout={toggleAbout.includes(user.id)}
            onClick={() => handleExpandAbout(user.id)}
          />
        );
      });
    }
  };

  return (
    <article className="Users">
      <button onClick={handleExpandAll}>Expand All</button>
      <button onClick={handleCollapseAll}>Collapse All</button>
      {renderContent()}
    </article>
  );
};

export default Users;
