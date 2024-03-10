import './FilterBar.css';

const FilterBar = ({hobbies, selectedHobbies, onHobbyClick}) => {
  //TODO: Add your filter buttons here

  return ( 
  <div className='filter_bar'>
    <h2>Filter by Hobbies</h2>
    
    {hobbies.map((hobby) => {
      return <button
      key={hobby}
      onClick={() => onHobbyClick(hobby)}
      className={selectedHobbies.includes(hobby) ? 'selected' : ''}>
        {hobby}
      </button>
    })}
  </div>
  )
};

export default FilterBar;
