import User from "../User/User";
import "./Users.scss";

const Users = ({ users = [], expandedList, handleExpandedList }) => {
  return (
    <article className="Users">
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
