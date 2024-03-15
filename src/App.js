import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

function App() {
  const [ users, setUsers ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState("");
  // liftup state from user comp
  const [ toggle, setToggle ] = useState([]);
  const [ selectedHobby, setSelectedHobby ] = useState([]);


  // TODO: Fetch data here
const fetchData = async () =>  {
  try {
    setLoading(true);
    setError("");
    const response = await fetch(`${API}/users`);
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


const allHobbies = new Set();
users.forEach(user =>
  user.hobbies.forEach(hobby => {
    allHobbies.add(hobby);
  })
);
const uniqueHobby = Array.from(allHobbies).sort();


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
  
  const filteredUsers = users.filter(user => 
    selectedHobby.every(hobby => user.hobbies.includes(hobby))
  );

  const renderContent = () => {
    if(loading) {
      return <div>Loading...</div>
    }else if(error){
      return <div>Error: {error}</div>
    }else {
     return( <>
          <FilterBar 
          hobbyList={uniqueHobby} 
          handleByCollapse={handleByCollapse} 
          handleByExpand={handleByExpand} 
          selectedHobby={selectedHobby}
          handleFilterBtnClick={handleFilterBtnClick}
          />
          {filteredUsers.length ? 
          (<Users 
          users={filteredUsers}
          toggle={toggle}
          onClick={handleToggle} />) 
          : <div className='nomatch'>No users match the filters: {selectedHobby.join(', ')}</div>
         }
          
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
