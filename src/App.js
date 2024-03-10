
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



  const renderContent = () => {
    if (loading) {
      return <div className="Loading">Loading...</div>;
    } else if (error) {
      return <div className="Error">Error: {error} </div>;
    } else {
      return (
    <div>
      <h1>Our Users</h1>
      <FilterBar />
      <Users users={users} />
    </div>
  );
      }
    }
    return <div className="App">{renderContent()}</div>;

}

export default App;
