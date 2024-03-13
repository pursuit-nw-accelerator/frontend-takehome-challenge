import User from '../User/User';
import './Users.css';

const Users = ({ users = [], singleUserAboutToggle, hobbies }) => {

  const renderUsers = () => {
    if (users.length > 0) {
      return users.map((user) => {
        const { id } = user;
        return <User key={id} user={user} singleUserAboutToggle={singleUserAboutToggle} />;
      })
    } else {
      return <div><p>No user match the filters: {Object.values(hobbies).filter(el => el.selected).map(el => el.title).join(", ")}</p></div>
    }
  }
  return (
    <article className="Users">
      {renderUsers()}
    </article>
  );

};

export default Users;
