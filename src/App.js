import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';
import { fetchItems } from './fetch_';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  // TODO: Fetch data here
  useEffect(() => {
    setErrorMsg("");
    fetchItems({
      dataCallabck: (data) => {

        const usersObj = {};

        for (let user of data) {
          user.showAbout = false;
          usersObj[user.id] = user;
        }
        setUsers(usersObj);

      },
      error: (err) => {
        setErrorMsg(err.message);
      },
      waiting: (status) => {
        setLoading(status);
      }
    });
  }, []);
  //about toggle function 
  const showAllUsersAbout = () => {
    const newUsersObj = {};
    for (let id in users) {
      newUsersObj[id] = { ...users[id], showAbout: true };
    }
    setUsers(newUsersObj);
  }
  const hideAllUsersAbout = () => {
    const newUsersObj = {};
    for (let id in users) {
      newUsersObj[id] = { ...users[id], showAbout: false };
    }
    setUsers(newUsersObj);
  }
  const singleUserAboutToggle = (id) => {
    const newUsersObj = { ...users };
    newUsersObj[id].showAbout = !newUsersObj[id].showAbout;
    setUsers(newUsersObj);
  }
  //render components
  const renderStatus = () => {
    if (errorMsg !== "") {

      return <div>{errorMsg}</div>

    } else if (loading) {

      return <div>Loading...</div>

    } else {

      return <>
        <FilterBar allUsersAboutStatus={{ expand: showAllUsersAbout, collapse: hideAllUsersAbout }} />
        <Users users={Object.values(users)} singleUserAboutToggle={singleUserAboutToggle} />
      </>

    }
  }

  return (
    <div className="App">
      <h1>Our Users</h1>
      {renderStatus()}
    </div>
  );
}

export default App;
