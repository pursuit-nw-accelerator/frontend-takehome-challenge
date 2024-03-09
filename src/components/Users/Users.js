import User from "../User/User";
import "./Users.css";
import { useState } from "react";

const Users = ({ users = [] }) => {
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

  return (
    <article className="Users">
      <button onClick={handleExpandAll}>Expand All</button>
      {users.map((user) => {
        const { id } = user;
        return (
          <User
            key={id}
            user={user}
            toggleAbout={toggleAbout.includes(user.id)}
            onClick={() => handleExpandAbout(user.id)}
          />
        );
      })}
    </article>
  );
};

export default Users;
