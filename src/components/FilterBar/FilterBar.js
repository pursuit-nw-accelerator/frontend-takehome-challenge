import './FilterBar.css';

const FilterBar = ({ users, hobbies, setExpandAll, setCollapseAll, toggleHobby }) => {
  const allHobbies = [];
  users.forEach(user =>
    user.hobbies.forEach(hobby => {
      if (!allHobbies.includes(hobby)) {
        allHobbies.push(hobby);
      }
    })
  );
  
  return (
    <div>
      <h2>Filter by hobby</h2>
      <div className='filter-expand'>
        <div className='filter-buttons'>
          {allHobbies.map((hobby, i) => 
            <button
              key={i}
              onClick={() => toggleHobby(hobby)}
              style={allHobbies.includes(hobby) && {background: "lightblue"}}
            >{hobby}</button>
          )}
        </div>
        <div className='expand-buttons'>
          <button onClick={setExpandAll}>Expand All</button>
          <button onClick={setCollapseAll}>Collapse All</button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
