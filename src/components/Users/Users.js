import User from "../User/User";
import "./Users.css";

const Users = ({ users, clickedButtons }) => {
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
    <article className="Users">
      {usersToDisplay.map((user) => {
        const { id } = user;
        return <User key={id} user={user} />;
      })}
      {usersToDisplay.length === 0 && (
        <p>No users match the filter: {noUsersFound}.</p>
      )}
    </article>
  );
};

export default Users;
