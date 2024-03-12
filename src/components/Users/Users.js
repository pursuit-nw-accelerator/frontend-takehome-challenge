import User from '../User/User';
import './Users.css';

const Users = ({ users = [], expanded, toggleExpanded }) => {

return (
  <article className="Users">  
    {users.map((user) => (
      <User
        key={user.id}
        user={user}
        expanded={expanded.includes(user.id)}
        onClick={() => toggleExpanded(user.id)}
      />
    ))}
  </article>
);
};

export default Users;
