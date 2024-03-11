import React, { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandState, setExpandState] = useState({});
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  useEffect(() => {
    fetch("https://users-app-backend.onrender.com/users")
      .then((response) => {
        if (!response.ok) {
          // Handle errors
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const toggleOpen = (id) => {
    setExpandState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleExpandAll = () => {
    const allExpanded = users.reduce(
      (acc, user) => ({ ...acc, [user.id]: true }),
      {}
    );
    setExpandState(allExpanded);
  };

  const handleCollapseAll = () => setExpandState({});

  const toggleHobby = (hobby) => {
    setSelectedHobbies((prevHobbies) =>
      prevHobbies.includes(hobby)
        ? prevHobbies.filter((h) => h !== hobby)
        : [...prevHobbies, hobby]
    );
  };

  const allHobbies = [...new Set(users.flatMap((user) => user.hobbies))].sort();

  const filteredUsers = selectedHobbies.length
    ? users.filter((user) =>
        selectedHobbies.every((hobby) => user.hobbies.includes(hobby))
      )
    : users;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  } //req 1 end

  return (
    <div className="App">
      <h1>Our Users</h1>
      <FilterBar
        hobbies={allHobbies}
        selectedHobbies={selectedHobbies}
        toggleHobby={toggleHobby}
      />
      <div className="UserControls">
        <button onClick={handleExpandAll}>Expand All</button>
        <button onClick={handleCollapseAll}>Collapse All</button>
      </div>

      {filteredUsers.length ? (
        <Users
          users={filteredUsers}
          expandState={expandState}
          toggleOpen={toggleOpen}
        />
      ) : (
        <div>No users match the filters: {selectedHobbies.join(", ")}</div>
      )}
    </div>
  );
}

export default App;
