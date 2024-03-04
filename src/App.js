import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';
import { fetchItems } from './fetch_';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  // TODO: Fetch data here
  useEffect(() => {
    setErrorMsg("");
    fetchItems({
      dataCallabck: (data) => {
        setUsers(data);
      },
      error: (err) => {
        setErrorMsg(err.message);
      },
      waiting: (status) => {
        setLoading(status);
      }
    });
  }, []);

  const renderStatus = () => {
    if (errorMsg !== "") {

      return <div>{errorMsg}</div>

    } else if (loading) {

      return <div>Loading...</div>

    } else {

      return <>
        <FilterBar />
        <Users users={users} />
      </>

    }
  }
  return (
    <div className="App">
      <h1>Our Users</h1>
      {renderStatus()}
    </div>
  );
}

export default App;
