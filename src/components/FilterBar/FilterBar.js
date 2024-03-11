import './FilterBar.css';

const FilterBar = ({ users, hobbies, setHobbies, handleExpandAll, handleCollapseAll }) => {
  const allHobbies = [];
  users.forEach(user =>
    user.hobbies.forEach(hobby => {
      if (!allHobbies.includes(hobby)) {
        allHobbies.push(hobby);
      }
    })
  );

  const toggleHobby = hobby => {
    if (hobbies.includes(hobby)) {
      setHobbies(hobbies.filter(currHobby => currHobby !== hobby));
    }
    else {
      setHobbies([...hobbies, hobby]);
    }
  }
  
  return (
    <div className='filter-bar'>
      <h2>Filter by hobby</h2>
      <div className='filter-expand'>
        <div className='filter-buttons'>
          {allHobbies.map((hobby, i) => 
            <button
              key={i}
              onClick={() => toggleHobby(hobby)}
              className={hobbies.includes(hobby) ? 'active-button' : ''}
            >{hobby}</button>
          )}
        </div>
        <div className='expand-buttons'>
          <button onClick={handleExpandAll}>Expand All</button>
          <button onClick={handleCollapseAll}>Collapse All</button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
