import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";
import "./App.scss";

const API = process.env.REACT_APP_API_URL;

const App = () => {
  const [users, setUsers] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [expandedList, setExpandedList] = useState([]);
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
        .then(async (res) => {
          if (!res.ok) {
            return res.json().then(({ error }) => {
              throw new Error(error || "Something went wrong");
            });
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

  const handleExpandedList = (id) => {
    if (!expandedList.includes(id)) {
      setExpandedList([...expandedList, id]);
    } else {
      setExpandedList(expandedList.filter((user) => user !== id));
    }
  };

  const handleExpandAll = () => {
    setExpandedList(users.map((user) => user.id));
  };

  const handleCollapseAll = () => {
    setExpandedList([]);
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
          <FilterBar
            users={users}
            handleExpandAll={handleExpandAll}
            handleCollapseAll={handleCollapseAll}
            hobbies={hobbies}
            setHobbies={setHobbies}
          />
          <Users
            users={users}
            expandedList={expandedList}
            handleExpandedList={handleExpandedList}
          />
        </>
      );
    }
  };

  return <div className="App">{renderData()}</div>;
};

export default App;
