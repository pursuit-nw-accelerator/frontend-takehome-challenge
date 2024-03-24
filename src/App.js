import './App.css';
import { useState, useEffect } from 'react';
import Users from './components/Users/Users';
import FilterBar from './components/FilterBar/FilterBar';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  // TODO: Fetch data here
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState([]);
  const [filterHobbies, setFilterHobbies] = useState([]);

  const handleExpandAll = () => {
    const allIds = users.map(user => user.id);
    setExpanded(allIds);
  }

  const handleCollapseAll = () => {
    setExpanded([]);
  }

  const toggleExpanded = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter(currId => currId !== id));
    }
    else {
      setExpanded([...expanded, id]);
    }
  };

  const toggleFilterHobby = hobby => {
    if (filterHobbies.includes(hobby)) {
      setFilterHobbies(filterHobbies.filter(currHobby => currHobby !== hobby));
    }
    else {
      setFilterHobbies([...filterHobbies, hobby]);
    }
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_URL}/users`);
      const { data, error: errorMsg } = await res.json();
      if (res.ok) {
        setUsers(data);
      }
      else {
        throw new Error(errorMsg);
      }
    }
    catch (err) {
      setError(err.message);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const allHobbies = [];
  users.forEach(user =>
    user.hobbies.forEach(hobby => {
      if (!allHobbies.includes(hobby)) {
        allHobbies.push(hobby);
      }
    })
  );
  allHobbies.sort();

  const filteredUsers = users.filter(user => 
    filterHobbies.every(hobby => user.hobbies.includes(hobby))
  );

  const renderContent = () => {
    if (loading) {
      return <div className="Loading">Loading...</div>;
    }
    else if (error) {
      return <div className="Error">Error: {error} </div>;
    }
    else {
      return (
        <>
          <FilterBar
            allHobbies={allHobbies}
            filterHobbies={filterHobbies}
            toggleFilterHobby={toggleFilterHobby}
            handleExpandAll={handleExpandAll}
            handleCollapseAll={handleCollapseAll}
          />
          {filteredUsers.length ? (
            <Users
              users={filteredUsers}
              expanded={expanded}
              toggleExpanded={toggleExpanded}
            />
          ) : (
            <h4>No users match the filters: {filterHobbies.join(', ')}</h4>
          )}
        </>
      );
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      {renderContent()}
    </div>
  );
}

export default App;
