import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setErrorMsg("");

      const res = await fetch(process.env.REACT_APP_URL + "users");
      const { data, error } = await res.json();

      if (res.ok) {
        setUsers(data);
      } else {
        throw new Error(error);
      }
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Our Users</h1>
      <FilterBar />
      <>{errorMsg}</>
      {loading && <div>Loading...</div>}
      {!loading && <Users users={users} />}
    </div>
  );
}

export default App;
