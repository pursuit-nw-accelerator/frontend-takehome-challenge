// DEPENDENCIES
import { useEffect, useState} from 'react';
// COMPONENTS
import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
//STYLING
import './App.css';
//API
// const API_URL = process.env.REACT_APP_API_URL


function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const fetchData = async() => {
    try {
      setLoading(true)
      // console.log(`${API_URL}/users`)
      const response = await fetch(`https://users-app-backend.onrender.com/users`)
      const { data, error: errorMsg } = await response.json();

      if (response.ok) {
        console.log(response)
        setUsers(data)
        console.log(users)
      } 
      else {
        throw new Error(errorMsg)
      }
    } catch(error){
      setError(error.message)
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, []) 

  const renderContent = () => {
    if (loading) {
      return <div className="Loading">Loading...</div>;
    } else if (error) {
      return <div className="Error">Error: {error} </div>;
    } else {
      return <Users users = {users}/>;
      // return <h1> Health Check For Loading</h1>;
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <div className="App">{renderContent()}</div>
      {/* <FilterBar />
      <Users /> */}
    </div>
  );
}

export default App;
