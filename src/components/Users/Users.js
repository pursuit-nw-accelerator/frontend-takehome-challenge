import User from '../User/User';
import './Users.css';

const Users = ({ users = [], singleUserAboutToggle }) => {

  return (
    <article className="Users">
      {users.map((user) => {
        const { id } = user;
        return <User key={id} user={user} singleUserAboutToggle={singleUserAboutToggle} />;
      })}
    </article>
  );

};

export default Users;
