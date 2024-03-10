import User from "../User/User";
import "./Users.css";

const Users = ({ users = [], hobbies, onClick, toggleAbout }) => {

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
            onClick={() => onClick(user.id)}
          />
        );
      });
    }
  };

  return (
    <article className="Users">
      {renderContent()}
    </article>
  );
};

export default Users;
