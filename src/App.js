import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [ users, setUsers ] = useState([]);
  const [loading, setLoading ] = useState(false)
  // TODO: Fetch data here
  const fetchData = async () =>  {
    try {
      setLoading(true)
      const response = await fetch('https://users-app-backend.onrender.com/users');
      const { data, err: errMessage } = await response.json();
      if(response.ok){
        setUsers(data);
        console.log(users)
      }else {
        throw new Error({error: errMessage})
      }
    }catch(err) {
      console.err(err)
    }finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  },[]);

  return (
    <div className="App">
      <h1>Our Users</h1>
      {loading ? "..." : (
        <>
          <FilterBar users={users}/>
          <Users users={users}/>
       </> 
      )}
      
    </div>
  );
}

export default App;
