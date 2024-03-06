import User from "../User/User";
import "./Users.scss";

const Users = ({
  users = [],
  expandedList,
  handleExpandedList,
  selectedHobbies,
}) => {
  let usersCopy = [...users];

  if (selectedHobbies.length > 0) {
    usersCopy = usersCopy.filter((user) => {
      return selectedHobbies.every((selectedHobby) => {
        return user.hobbies.includes(selectedHobby);
      });
    });

    if (usersCopy.length === 0) {
      return <p>No users match the filters: {selectedHobbies.join(", ")}</p>;
    }
  } else {
    usersCopy = [...users];
  }

  return (
    <article className="Users">
      {usersCopy.map((user) => {
        const { id } = user;
        return (
          <User
            key={id}
            user={user}
            handleExpandedList={expandedList.includes(id)}
            onClick={() => handleExpandedList(id)}
            selectedHobbies={selectedHobbies}
          />
        );
      })}
    </article>
  );
};

export default Users;
