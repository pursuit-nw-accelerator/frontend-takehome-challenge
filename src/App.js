
import { useEffect, useState } from "react";
import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  // TODO: Fetch data here
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [allHobbies, setAllHobbies] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(`${API_URL}/users`);
      console.log(response);
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
    } else if (filteredUsers.length === 0 && selectedHobbies.length > 0) {
      return (
        <div className="NoUsers">
          No users match the filters: {selectedHobbies.join(', ')}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Our Users</h1>
          <FilterBar
            filterBar={selectedHobbies}
            onFilterChange={handleFilterChange}
            allHobbies={allHobbies}
          />
          <Users users={filteredUsers} />
        </div>
      );
    }
  };
    return <div className="App">{renderContent()}</div>;

}

export default App;
