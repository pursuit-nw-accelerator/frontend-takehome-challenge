import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import { useEffect, useState } from "react";

import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true)
      setError('');
      const response = await fetch(`${API_URL}users`);
      const { data, error: errorMsg } = await response.json();
      if (response.ok) {
        setUsers(data)
      } else {
        throw new Error(errorMsg);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false)
    }
  }

  const hobbiesToDisplay = users.filter((user) =>
    selectedHobbies.every(selectedHobby => user.hobbies.includes(selectedHobby))
  );

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <div className="Loading">Loading...</div>;
    } else if (error) {
      return <div className="Error">Error: {error} </div>;
    } else {
      return (<div className="App">
        <h1>Our Users</h1>
        <FilterBar
          users={users}
          setExpanded={setExpanded}
          setSelectedHobbies={setSelectedHobbies}
          selectedHobbies={selectedHobbies} />
        <Users
          users={hobbiesToDisplay}
          expanded={expanded}
          setExpanded={setExpanded}
          selectedHobbies={selectedHobbies} />
      </div>);
    }
  };
  return <div className="App">{renderContent()}</div>;


}

export default App;
