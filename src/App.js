import React, { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [expanded, setExpanded] = useState([]);

  // Fetch data 
  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('https://users-app-backend.onrender.com/users');
      const { data, error: errorMsg } = await response.json();
      if (response.ok) {
        setUsers(data);
      } else {
        throw new Error(errorMsg);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle hobby selection/deselection
  const handleHobbies = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((selected) => selected !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  // hobbies from users
  const hobbies = users.reduce((hobbyList, user) => {
    user.hobbies.forEach((hobby) => {
      if (!hobbyList.includes(hobby)) {
        hobbyList.push(hobby);
      }
    });
    return hobbyList;
  }, []).sort();

  const toggleExpanded = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter((currId) => currId !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  };

  const expandAll = () => {
    const allUserIds = users.map((user) => user.id);
    setExpanded(allUserIds);
  };

  const collapseAll = () => {
    setExpanded([]);
  };

  // Render content 
  const renderContent = () => {
    const filteredUsers = users.filter((user) =>
      selectedHobbies.every((selectedHobby) => user.hobbies.includes(selectedHobby))
    );

    const selectedFilters = selectedHobbies.join(', ');

    if (loading) {
      return <div className="Loading">One second...</div>;
    } else if (error) {
      return <div className="Error">Error: {error}</div>;
    } else {
      return (
        <div>
          <FilterBar hobbies={hobbies} selectedHobbies={selectedHobbies} onHobbyClick={handleHobbies} />
          <div className="Buttons">
            <button onClick={expandAll}>Expand all</button>
            <button onClick={collapseAll}>Collapse all</button>
          </div>
          {filteredUsers.length > 0 ? (
            <Users users={filteredUsers} selectedHobbies={selectedHobbies} expanded={expanded} toggleExpanded={toggleExpanded}/>
          ) : (
            <p>No users match the filters: {selectedFilters}</p>
          )}
        </div>
      );
    }
  };

  return <div className="App">{renderContent()}</div>;
}

export default App;
