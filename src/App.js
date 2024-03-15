import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";
import "./App.scss";

import Loading from "./components/Loading/Loading";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const API = process.env.REACT_APP_API_URL;

const App = () => {
  const [users, setUsers] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [expandedList, setExpandedList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setError("");
      setLoading(true);

      const response = await fetch(`${API}/users`);
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
      return <ErrorMessage error={error} />;
    } else if (loading) {
      return <Loading />;
    } else {
      return (
        <>
          <h1>Our Users</h1>
          <h1>Filter By Hobbies</h1>
          <FilterBar
            users={users}
            handleExpandAll={handleExpandAll}
            handleCollapseAll={handleCollapseAll}
            hobbies={hobbies}
            setHobbies={setHobbies}
            selectedHobbies={selectedHobbies}
            setSelectedHobbies={setSelectedHobbies}
          />
          <Users
            users={users}
            expandedList={expandedList}
            handleExpandedList={handleExpandedList}
            selectedHobbies={selectedHobbies}
          />
        </>
      );
    }
  };

  return <div className="App">{renderData()}</div>;
};

export default App;
