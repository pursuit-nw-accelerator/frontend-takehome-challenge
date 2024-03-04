import "./App.scss";
import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";

const API = process.env.REACT_APP_API_URL;

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setError("");
      setLoading(true);

      await fetch(API)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          return res.json();
        })
        .then(({ data }) => setUsers(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    } catch (err) {
      setError(err.message);
    }
  };

  const renderData = () => {
    if (error) {
      return <div>ERROR: {error}</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <h1>Our Users</h1>
          <FilterBar />
          <Users users={users} />
        </>
      );
    }
  };

  return <div className="App">{renderData()}</div>;
};

export default App;
