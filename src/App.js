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
  const [clickedButtons, setClickedButtons] = useState([]);

  const buttonTextFromFilterBar = (buttonText) => {
    if (clickedButtons.includes(buttonText)) {
      setClickedButtons(
        clickedButtons.filter((button) => button !== buttonText)
      );
    } else {
      setClickedButtons([...clickedButtons, buttonText]);
    }
  };

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
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      {renderContent()}
      {!loading && (
        <>
          <FilterBar
            users={users}
            buttonTextFromFilterBar={buttonTextFromFilterBar}
          />
          <Users users={users} clickedButtons={clickedButtons} />
        </>
      )}
    </div>
  );
}

export default App;
