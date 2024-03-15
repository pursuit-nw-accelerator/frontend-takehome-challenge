import './FilterBar.css';

const FilterBar = ({ allHobbies, filterHobbies, toggleFilterHobby, handleExpandAll, handleCollapseAll }) => {
  
  return (
    <div className='filter-bar'>
      <h2>Filter by hobby</h2>
      <div className='filter-expand'>
        <div className='filter-buttons'>
          {allHobbies.map((hobby, i) => 
            <button
              key={i}
              onClick={() => toggleFilterHobby(hobby)}
              className={filterHobbies.includes(hobby) ? 'active-button' : ''}
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
