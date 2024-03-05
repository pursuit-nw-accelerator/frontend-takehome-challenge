import User from "../User/User";
import { useState } from "react";
import "./Users.css";

const Users = ({ users, filter = [] }) => {
  const [showAll, setShowAll] = useState(
    Array.from({ length: users.length }).fill(1),
  );

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

  return (
    <>
      <button
        type="button"
        onClick={() => {
          const newArr = showAll.map(() => 1);
          setShowAll(newArr);
        }}
      >
        Expand All
      </button>
      <button
        type="button"
        onClick={() => {
          const newArr = showAll.map(() => 0);
          setShowAll(newArr);
        }}
      >
        Collapse All
      </button>
      <article className="Users">
        <>
          {filteredUsers.length > 0
            ? filteredUsers.map((user, idx) => {
                const { id } = user;
                return (
                  <User
                    key={id}
                    user={user}
                    showAll={showAll}
                    aboutHandler={(e) => {
                      const newArr = showAll?.map((item, i) => {
                        if (+e.target.value === i) {
                          return 1 ^ item;
                        } else return item;
                      });
                      setShowAll(newArr);
                    }}
                    idx={idx}
                  />
                );
              })
            : `No users match the filters: ${include.join(", ")}`}
        </>
      </article>
    </>
  );
};

export default Users;
