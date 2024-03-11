// DEPENDENCIES
import { useEffect, useState} from 'react';
// COMPONENTS
import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
//STYLING
import './App.css';
//API

function App() {
  const [users, setUsers] = useState([])
  const [uniqueHobbies, setUniqueHobbies] = useState([])
  const [selected, setSelected] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchData = async() => {
    try {
      setLoading(true)
      const response = await fetch(`https://users-app-backend.onrender.com/users`)
      const { data, error: errorMsg } = await response.json();

      if (response.ok) {
        setUsers(data)
        let hobbiesArr = data.map(user => user.hobbies).flat()
        console.log(hobbiesArr)
        //add the unique hobby into the uniqueHobbies State 
        let filteredHobbies = hobbiesArr.filter((hobby, index, arr) => arr.indexOf(hobby) === index)
        setUniqueHobbies(filteredHobbies.sort())
      } else {
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
    
  const toggleSelectedHobby = (hobby) => {
    //if there's already a value in the state, remove it from the selected list
    if(selected.includes(hobby)){
      setSelected(selected.filter(currentHobby => currentHobby !== hobby ))
    } else {
      //else add all of the current elements and the new hobby into the selected list  
      setSelected([...selected, hobby]);
      console.log(selected)
    }
  }

  const renderContent = () => {
    //filters the users based on the selected hobbies using the filter method and every method. 
    //ensures that only users who have all selected hobbies are included in the filteredUsers array
    const filteredUsers = users.filter(user => selected.every(selectedHobby => user.hobbies.includes(selectedHobby)))
    if (loading) {
        return <div className="Loading">Loading...</div>;
      } else if (error) {
      return <div className="Error">Error: {error} </div>;
    } 
    else {
      return (
        <div>
          <FilterBar uniqueHobbies = {uniqueHobbies} selected = {selected} onClick={toggleSelectedHobby} />
          {filteredUsers.length > 0 ? (
            <Users users = {filteredUsers} selected = {selected}/>
          ) : (
            <h1> No users match the filters: {selected.join(", ")}</h1>
          )}
        </div>
      )
    }
  };

  return (
    <div className="App">
      <h1>Our Users</h1>
      <div className="App">{renderContent()}</div>
    </div>
  );
}

export default App;
