import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

const API = process.env.REACT_API_URL

function App() {
  const [ users, setUsers ] = useState([]);
  const [loading, setLoading ] = useState(false);
  const [error, setError ] = useState("");
  //showmore and less liftup state from user comp
  const [ toggle, setToggle ] = useState([]);
  const [ selectedHobby, setSelectedHobby ] = useState([]);

  const arr = [];
  users.forEach(user => arr.push(...user.hobbies));
  const hobbyList = arr.filter((el, i, arr) => arr.indexOf(el) === i).sort()

  const handleToggle = (id) => {
    if(toggle.includes(id)){
      setToggle(toggle.filter((currId) => currId !== id))
    }else {
      setToggle([...toggle, id])
    }
  }

  const handleByExpand = () => {
    setToggle(users.map(user => user.id))
  }
  
  const handleByCollapse = () => {
    setToggle([])
  }

  const handleFilterBtnClick = (hobby) => {
    let category = hobby.target.value
    if(selectedHobby.includes(category)){
      setSelectedHobby(selectedHobby.filter(currHobby => currHobby !== category))
    }else {
      setSelectedHobby([...selectedHobby, category])
    }
  }
  
  const filterByHobby = () => {
  if(selectedHobby.length > 0){
    let filterUsers = users.filter(user => user.hobbies.some(hobby => selectedHobby.includes(hobby)))
    setUsers(filterUsers)
  }
}

// TODO: Fetch data here
const fetchData = async () =>  {
  try {
    setLoading(true);
    setError("");
    const response = await fetch('https://users-app-backend.onrender.com/users');
    const { data, error: errMessage } = await response.json();
    if(response.ok){
      setUsers(data);
    }else {
      throw new Error(errMessage)
    }
  }catch(err) {
    setError(err.message)
  }finally {
    setLoading(false)
  }
}

useEffect(() => {
  fetchData()
},[]);

useEffect(() => {
  filterByHobby()
}, [selectedHobby])

  const renderContent = () => {
    if(loading) {
      return <div>Loading...</div>
    }else if(error){
      return <div>Error: {error}</div>
    }else {
     return( <>
          <FilterBar 
          hobbyList={hobbyList} 
          handleByCollapse={handleByCollapse} 
          handleByExpand={handleByExpand} 
          selectedHobby={selectedHobby}
          handleFilterBtnClick={handleFilterBtnClick}
          />
          <Users 
          users={users}
          toggle={toggle}
          onClick={handleToggle} />
       </> )
    }
  }

  return (
    <div className="App">
      <h1>Our Users</h1>
      <div>{renderContent()}</div>
    </div>
  );
}

export default App;
