import User from "../User/User";
import { useState } from "react";
import "./Users.css";

const Users = ({ users = [], filter = [] }) => {
  const [showAll, setShowAll] = useState(true);

  const include = filter
    .filter((item) => item.enabled === true)
    .map((item) => item.item);

  const filteredUsers = users.filter((item) => {
    if (include.length > 1) {
      return item.hobbies.every((y) => include.includes(y));
    } else if (include.length === 1) {
      return item.hobbies.includes(include[0]);
    } else return true;
  });

  if (users.length)
    return (
      <article className="Users">
        <div>
          <button type="button" onClick={() => setShowAll(true)}>
            Expand All
          </button>
          <button type="button" onClick={() => setShowAll(false)}>
            Collapse All
          </button>
        </div>
        {showAll ? (
          <>
            {filteredUsers.length > 0
              ? filteredUsers.map((user) => {
                  const { id } = user;
                  return <User key={id} user={user} />;
                })
              : `No users match the filters: ${include.join(", ")}`}
          </>
        ) : (
          <>List Hidden</>
        )}
      </article>
    );
  return null;
};

export default Users;
