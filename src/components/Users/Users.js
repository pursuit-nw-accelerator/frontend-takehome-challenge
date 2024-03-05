import User from "../User/User";
import FilterBar from "../FilterBar/FilterBar";
import { useState } from "react";
import "./Users.css";

const Users = ({ users = [] }) => {
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState(
    users.length
      ? [
          ...new Set(
            users
              .map((item) => item.hobbies)
              .flat()
              .sort((a, b) => a.localeCompare(b)),
          ),
        ].map((item) => ({
          item,
          enabled: false,
        }))
      : [],
  );

  const include = filter
    .filter((item) => item.enabled === true)
    .map((item) => item.item);

  const filteredUsers = users.filter((item) => {
    if (include.length > 1) {
      return item.hobbies.every((y) => include.includes(y));
    } else if (include.length === 1) {
      return item.hobbies.some((y) => include.includes(y));
    } else return true;
  });

  return (
    <article className="Users">
      <FilterBar setFilter={setFilter} filter={filter} />
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
};

export default Users;
