import FilterBar from "./components/FilterBar/FilterBar";
import Users from "./components/Users/Users";
import "./App.css";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [errMsg, setErrMsg] = useState("");
  const [hobbySelected, setHobbySelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleAbout, setToggleAbout] = useState([]);
  const [users, setUsers] = useState([]);

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

  const handleExpandAbout = (id) => {
    if (toggleAbout.includes(id)) {
      setToggleAbout(toggleAbout.filter((currId) => currId !== id));
    } else {
      setToggleAbout([...toggleAbout, id]);
    }
  };

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
            setToggleAbout={setToggleAbout}
          />
          <Users users={filteredUsers} hobbies={hobbySelected} toggleAbout={toggleAbout} onClick={handleExpandAbout} />
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
