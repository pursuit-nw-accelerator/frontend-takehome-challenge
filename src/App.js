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

  const handleToggleHobby = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      const newHobbies = selectedHobbies.filter((currHobby) => currHobby !== hobby);
      setSelectedHobbies(newHobbies);
    } else {
      const newHobbies = [...selectedHobbies, hobby];
      setSelectedHobbies(newHobbies);
    }
  };

  const toggleExpand = (id) => {
    if (expanded.includes(id)) {
      const newExpanded = expanded.filter((currID) => currID !== id);
      setExpanded(newExpanded);
    } else {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    }
  };

  const handleToggleAll = () => {
    setExpanded(users.map((user) => user.id));
  };

  const handleToggleCollapseAll = () => {
    setExpanded([]);
  };

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
  
  const listOfHobbies = Array.from(new Set(users.flatMap(user => user.hobbies)))
  .sort((a, b) => a.localeCompare(b));

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
          selectedHobbies={selectedHobbies}
          listOfHobbies={listOfHobbies}
          setExpanded={setExpanded}
          handleToggleHobby={handleToggleHobby}
          handleToggleAll={handleToggleAll}
          handleToggleCollapseAll={handleToggleCollapseAll}
        />
        <Users
          users={hobbiesToDisplay}
          expanded={expanded}
          selectedHobbies={selectedHobbies}
          setExpanded={setExpanded}
          toggleExpand={toggleExpand} />
      </div>);
    }
  };
  return <div className="App">{renderContent()}</div>;


}

export default App;
