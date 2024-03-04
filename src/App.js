import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';
import { fetchItems } from './fetch_';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [hobbies, setHobbies] = useState({});
  // TODO: Fetch data here
  useEffect(() => {
    setErrorMsg("");
    fetchItems({
      dataCallabck: (data) => {

        const usersObj = {};
        const hobbies = {};
        for (let user of data) {
          user.showAbout = false;
          usersObj[user.id] = user;
          for (let hobby of user.hobbies) {
            hobbies[hobby] = { title: hobby, disable: false, selected: false };
          }
        }
        setUsers(usersObj);
        setHobbies(hobbies);
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
        <FilterBar
          allUsersAboutStatus={{ expand: showAllUsersAbout, collapse: hideAllUsersAbout }}
          hobbies={hobbies}
          setHobbies={setHobbies}
        />
        <Users
          users={Object.values(filterUsers(users, hobbies, setHobbies))}
          singleUserAboutToggle={singleUserAboutToggle}

          hobbies={hobbies}
        />
      </>

    }
  }
  //filter user
  function filterUsers(users, hobbies) {

    // users
    const usersByHobbies = {};
    for (let id in users) {
      const hobbiesSet = new Set(users[id].hobbies);
      let rangeChecker = true;
      for (let hobby in hobbies) {
        if (hobbies[hobby].selected === false) continue;

        if (!hobbiesSet.has(hobby)) {
          rangeChecker = false;
          break;
        }
      }

      if (rangeChecker) {
        usersByHobbies[id] = users[id];
      }

    }
    return usersByHobbies;
  }

  return (
    <div className="App">
      <h1>Our Users</h1>
      {renderStatus()}
    </div>
  );
}

export default App;
