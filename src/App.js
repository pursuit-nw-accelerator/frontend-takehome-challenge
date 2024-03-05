import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";
import "./App.css";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setErrMsg("");
        const res = await fetch(`${API_URL}/users`);
        const { data, error } = await res.json();

        if (res.ok) {
          setUsers(data);
        } else {
          throw new Error(error);
        }
      } catch (error) {
        setErrMsg(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Our Users</h1>
      {loading ? (
        <div>Loading...</div>
      ) : errMsg ? (
        <div>Error: {errMsg}</div>
      ) : (
        <div>
          <FilterBar />
          <Users />
        </div>
      )}
    </div>
  );
}

export default App;
