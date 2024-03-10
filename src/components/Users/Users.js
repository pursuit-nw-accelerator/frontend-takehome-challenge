import React from "react";
import User from "../User/User";
import "./Users.css";

const Users = ({ users = [], expandState, toggleOpen }) => {
  return (
    <article className="Users">
      {users.map((user) => {
        const isUserOpen = expandState[user.id];
        return (
          <User
            key={user.id}
            user={user}
            isOpen={isUserOpen}
            toggleOpen={() => toggleOpen(user.id)}
          />
        );
      })}
    </article>
  );
};

export default Users;
