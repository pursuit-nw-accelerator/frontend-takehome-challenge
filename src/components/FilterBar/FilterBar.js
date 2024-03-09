import './FilterBar.css';

const FilterBar = ({users, setExpanded, setSelectedHobbies, selectedHobbies}) => {

  const toggleAll = () =>{
    setExpanded(users.map((user) => user.id))
  }
  const toggleCollapseAll = () =>{
    setExpanded([])
  }

  const toggleHobby = (id) => {
    if (selectedHobbies.includes(id)) {
      const newHobby = selectedHobbies.filter((currID) => currID !== id);
      setSelectedHobbies(newHobby);
    } else {
      const newHobby = [...selectedHobbies, id];
      setSelectedHobbies(newHobby);
    }
  };

  const listOfHobbies = Array.from(new Set(users.flatMap(user => user.hobbies)))
    .sort((a, b) => a.localeCompare(b));

  return(
  <div className='filterBar'>
    <div className='hobbyList'>
      {listOfHobbies.map((hobby) => {
        return <button 
        key={hobby}
        onClick={() => toggleHobby(hobby)} 
        className={selectedHobbies.includes(hobby) ? 'selected hobbyButton' : 'hobbyButton'}>{hobby}</button>
      })}
    </div>
    <div className='expandCollapseAll'>
      <button onClick={toggleAll}>Expand All</button>
      <button onClick={toggleCollapseAll}>Collapse All</button>
    </div>
  </div>);
};

export default FilterBar;
