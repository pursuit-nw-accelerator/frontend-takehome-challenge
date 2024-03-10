// DEPENDENCIES
import {useState} from 'react';
// COMPONENTS
import User from '../User/User';
//STYLING
import './Users.css';

const Users = ({ users }) => {
  const [showAbout, setShowAbout] = useState([])

  const toggleExpandAll = (id) => {
    setShowAbout(users.map(user => user.id))
  }

  const toggleCollapseAll = () => {
    setShowAbout([])
  } 

  //make sure to include id as a parameter
  const toggleShowAbout = (id) => {
    //if id is in the expanded state, remove it
    if (showAbout.includes(id)) {
      setShowAbout(showAbout.filter((currentId) => currentId !== id));
    } else {
      //else add all of the current elements into the new array and then the new id
      setShowAbout([...showAbout, id]);
    }
  };

  return (
    <article className="Users">
      <button 
      className='toggle-button'
      onClick={() => toggleExpandAll()}
      >Expand All</button>
      <button 
      className="toggle-button"
      onClick={() => toggleCollapseAll()}
      >Collapse All</button>
      {users.map((user) => {
        const { id } = user;
        return <User 
        key={id} 
        user={user}
        showAbout = {showAbout.includes(user.id)}
        onClick= {() => toggleShowAbout(user.id)}
        />;
      })}
    </article>
  );
};

export default Users;
