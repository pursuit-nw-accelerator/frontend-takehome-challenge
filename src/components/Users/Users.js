import User from '../User/User';
import './Users.css';

const Users = ({ users = [], expanded, setExpanded }) => {

  const toggleExpanded = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter(currId => currId !== id));
    }
    else {
      setExpanded([...expanded, id]);
    }
  };

  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return (
          <User
            key={id}
            user={user}
            expand={expanded.includes(user.id)}
            toggleExpand={() => toggleExpanded(user.id)}
          />
        );
      })}
    </article>
  );
};

export default Users;
