import React, { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://users-app-backend.onrender.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch list of Users');
      }
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className='App'>Loading...</div>;
  }
  if (error) {
    return <div className='App'>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Our Users</h1>
      <FilterBar users={users} setUsers={setUsers} />
      <Users users={users} />
    </div>
  );
}

export default App;
