import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setErrorMsg("");

      const res = await fetch(process.env.REACT_APP_URL + "users");
      const { data, error } = await res.json();

      if (res.ok) {
        setUsers(data);
        setFilter(
          [
            ...new Set(
              data
                .map((item) => item.hobbies)
                .flat()
                .sort((a, b) => a.localeCompare(b)),
            ),
          ].map((item) => ({
            item,
            enabled: false,
          })),
        );
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
      <FilterBar
        filter={filter}
        eventHandler={(item) => {
          setFilter((prevFilter) =>
            prevFilter.map((filterItem) =>
              filterItem.item === item.target.value
                ? { ...filterItem, enabled: !filterItem.enabled }
                : filterItem,
            ),
          );
        }}
      />
      <>{errorMsg}</>
      {loading && <div>Loading...</div>}
      {users.length && <Users users={users} filter={filter} />}
    </div>
  );
}

export default App;
