//Dependencies
import React , { useEffect , useState } from 'react';

//Components
import FilterBar from './components/FilterBar/FilterBar';
import Users from './components/Users/Users';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [selectedHobbies, setSelectedHobbies] = useState([])
  const [hobbies, setHobbies] = useState([])
  const fetchData = async () => {
    try {
      setLoading(true)
      setTimeout(() => {
      }, 5000)
      setError("")
      const response = await fetch("https://users-app-backend.onrender.com/users")
      const { data , error: errorMsg } = await response.json();
      if(response.ok) {
        setUsers(data);
        console.log(data)
        
        const allHobbies = data.reduce((hobbyList, user) => {
          user.hobbies.forEach(hobby => {
            if(!hobbyList.includes(hobby)){
              hobbyList.push(hobby)
            }
          })
          return hobbyList
        }, [])

        console.log(allHobbies)
        setHobbies(allHobbies.sort())
      } else {
        throw new Error(errorMsg)
      }
    } catch(err) {
      console.log(err.message)
      setError(err.message);
    } finally {
      console.log(loading)
      console.log('Loading Complete!')
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchData();
  }, [])
  
const handleHobbies = (hobby) => {
  if(selectedHobbies.includes(hobby)) {
    setSelectedHobbies(selectedHobbies.filter((selected) => selected !== hobby))
  } else {
    setSelectedHobbies([...selectedHobbies, hobby])
  }
}

const renderContent = () => {
 
         const filteredUsers = users.filter(user => {
        return selectedHobbies.every(selectedHobby => user.hobbies.includes(selectedHobby)) 
      });

  const selectedFilters = selectedHobbies.join(', ')

  if (loading) {
      return <div className="Loading">One second...</div>;
    } else if (error) {
      return <div className="Error">Error: {error} </div>;
    } else {
      return (
      <div>
      <FilterBar hobbies={hobbies} selectedHobbies={selectedHobbies} onHobbyClick={handleHobbies}/>
      {filteredUsers.length > 0 ? ( 
        <Users users={filteredUsers} selectedHobbies={selectedHobbies}/> 
      ) : ( 
        <p>No users match the filters: {selectedFilters}</p>
      )}
      </div>
      )
    }
  };
  return <div className="App">{renderContent()}</div>;
}
  
export default App;
