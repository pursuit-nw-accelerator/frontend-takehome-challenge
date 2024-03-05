import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";
import "./App.css";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API_URL}/users`);
        const json = await res.json();

        if (res.ok) {
          setUsers(json.data)
        } else {
          throw new Error(json.error);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Our Users</h1>
      <FilterBar />
      <Users />
    </div>
  );
}

export default App;
