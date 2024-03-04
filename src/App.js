import React from "react";
import { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";
import "./App.css";

function App() {
  const url = process.env.REACT_APP_API_URL;

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const res = await fetch(`${url}`);
      const { data, error } = await res.json();

      if (res.ok) {
        setUsers(data);
      } else {
        throw new error(error);
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <div>Loading.....</div>;
    } else if (errorMessage) {
      return <div>{errorMessage}</div>;
    } else {
      return <Users users={users} />;
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <FilterBar users={users} />
      {renderContent()}
    </div>
  );
}

export default App;
