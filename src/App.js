
import React, { useEffect, useState } from "react";
import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [allHobbies, setAllHobbies] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(`${API_URL}/users`);
        const { data, error: errorMsg } = await response.json();
        if (response.ok) {
          setUsers(data);
          updateAllHobbies(data);
        } else {
          throw new Error(errorMsg);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  


  const updateAllHobbies = (usersData) => {
    const uniqueHobbies = usersData.reduce((hobbies, user) => {
      user.hobbies.forEach((hobby) => {
        if (!hobbies.includes(hobby)) {
          hobbies.push(hobby);
        }
      });
      return hobbies.sort();
    }, []);

    setAllHobbies(uniqueHobbies);
  };


  const handleFilterChange = (hobby) => {
    setSelectedHobbies((prevSelectedHobbies) => {
      if (prevSelectedHobbies.includes(hobby)) {
        return prevSelectedHobbies.filter((selected) => selected !== hobby);
      } else {
        return [...prevSelectedHobbies, hobby];
      }
    });
  };

  const filteredUsers = users.filter((user) =>
    selectedHobbies.every((hobby) => user.hobbies.includes(hobby))
  );

  const renderContent = () => {
    if (loading) {
      return <div className="Loading">Loading...</div>;
    } else if (error) {
      return <div className="Error">Error: {error} </div>;
    } else {
      return (
        <div>
          <h1>Our Users</h1>
          <FilterBar
            filterBar={selectedHobbies}
            onFilterChange={handleFilterChange}
            allHobbies={allHobbies}
          />
          {filteredUsers.length === 0 && selectedHobbies.length > 0 ? (
            <div className="NoUsers">
              No users match the filters: {selectedHobbies.join(', ')}
            </div>
          ) : (
            <Users users={filteredUsers} />
          )}
        </div>
      );
    }
  };
  

  return <div className="App">{renderContent()}</div>;
}

export default App;
