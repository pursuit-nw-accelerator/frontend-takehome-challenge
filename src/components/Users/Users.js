import User from '../User/User';
import './Users.css';

const Users = ({ users = [], expanded, setExpanded, selectedHobbies }) => {

  const toggleExpand = (id) => {
    if (expanded.includes(id)) {
      const newExpanded = expanded.filter((currID) => currID !== id);
      setExpanded(newExpanded);
    } else {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    }
  };

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
