import User from '../User/User';
import './Users.css';

const Users = ({users=[],toggle, onClick}) => {
  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return <User key={id} user={user} toggle={toggle.includes(id)} onClick={() => onClick(id)}/>;
      })}
    </article>
  );
};

export default Users;
