import User from '../User/User';
import './Users.css';

const Users = ({ users = [], expanded, selectedHobbies, toggleExpand }) => {


  return (
    <article className="Users">
      {users.length ?
        users.map((user) => {
          const { id } = user;
          return <User key={id} user={user} expanded={expanded.includes(user.id)} onClick={() => toggleExpand(user.id)} />;
        })
        :
        `No users match the features: ${selectedHobbies.join(", ")}`}
    </article>
  );
};

export default Users;
