import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [ users, setUsers ] = useState([]);
  const [loading, setLoading ] = useState(false)
  const [ toggle, setToggle ] = useState([]);


  const handleToggle = (id) => {
    if(toggle.includes(id)){
      setToggle(toggle.filter((currId) => currId !== id))
    }else {
      setToggle([...toggle, id])
    }
  }

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

  const filterUser = (filter) => {
   const { hobbies } = users[0]
   console.log(users[0].hobbies)
     if(filter.length > 0){
      console.log(filter);
      const filteredUser = filter.filter(hobby => hobbies.includes(hobby));
       setUsers(filteredUser)
     }
  }

  return (
    <div className="App">
      <h1>Our Users</h1>
      {loading ? "Loading..." : (
        <>
          <FilterBar users={users} filterUser={filterUser}/>
          <Users 
          users={users}
          toggle={toggle}
          onClick={handleToggle} />
       </> 
      )}
      
    </div>
  );
}

export default App;
