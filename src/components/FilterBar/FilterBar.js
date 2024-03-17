import './FilterBar.css';

const FilterBar = ({ selectedHobbies, handleToggleHobby, handleToggleAll, handleToggleCollapseAll, listOfHobbies={listOfHobbies} }) => {


  return(
  <div className='filterBar'>
    <div className='hobbyList'>
      {listOfHobbies.map((hobby) => {
        return <button 
        key={hobby}
        onClick={() => handleToggleHobby(hobby)} 
        className={selectedHobbies.includes(hobby) ? 'selected hobbyButton' : 'hobbyButton'}>{hobby}</button>
      })}
    </div>
    <div className='expandCollapseAll'>
      <button onClick={handleToggleAll}>Expand All</button>
      <button onClick={handleToggleCollapseAll}>Collapse All</button>
    </div>
  </div>);
};

export default FilterBar;
