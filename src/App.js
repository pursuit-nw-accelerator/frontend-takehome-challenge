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
  const [hobbies, setHobbies] = useState([]);

  const handleExpandAll = () => {
    const allIds = users.map(user => user.id);
    setExpanded(allIds);
  }

  const handleCollapseAll = () => {
    setExpanded([]);
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

  const filteredUsers = users.filter(user => 
    hobbies.every(hobby => user.hobbies.includes(hobby))
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
            users={users}
            hobbies={hobbies}
            setHobbies={setHobbies}
            handleExpandAll={handleExpandAll}
            handleCollapseAll={handleCollapseAll}
          />
          {filteredUsers.length ? (
            <Users
              users={filteredUsers}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ) : (
            <h4>No users match the filters: {hobbies.join(', ')}</h4>
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
