import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";
import "./App.css";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [hobbySelected, setHobbySelected] = useState([]);

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

  const handleHobbySelected = (hobby) => {
    if (hobbySelected.includes(hobby)) {
      setHobbySelected(
        hobbySelected.filter((currHobby) => currHobby !== hobby)
      );
    } else {
      setHobbySelected([...hobbySelected, hobby]);
    }
  };

  const filteredUsers = users.filter((user) =>
    hobbySelected.every((hobby) => user.hobbies.includes(hobby))
  );

  const renderContent = () => {
    if (loading) {
      return <div>Loading...</div>;
    } else if (errMsg) {
      return <div>Error: {errMsg}</div>;
    } else {
      return (
        <div>
          <FilterBar
            users={users}
            onClick={handleHobbySelected}
            hobbySelected={hobbySelected}
          />
          <Users users={filteredUsers} hobbies={hobbySelected} />
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      {renderContent()}
    </div>
  );
}

export default App;
