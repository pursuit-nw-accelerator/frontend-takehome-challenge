import './FilterBar.css';

const FilterBar = ({ hobbies, setHobbies, allUsersAboutStatus }) => {

  //event
  const hobbyButtonClick = (hobby) => {
    const newHobbies = { ...hobbies };
    newHobbies[hobby].selected = !newHobbies[hobby].selected;
    setHobbies(newHobbies);
  }
  //render
  const renderHobbiesButtons = () => {

    const endProductUsers = Object.values(hobbies).sort((a, b) => a.title < b.title ? -1 : 1);

    return endProductUsers.map((el) => {
      return <button
        className={el.selected ? 'highlight' : ""}
        onClick={() => hobbyButtonClick(el.title)}
        key={`hobby_button_${el.title}`}
        disabled={el.disbale ? true : false}
      >{el.title}</button>
    })
  }
  return <div className='filterBar_container'>
    <div className='filterBar_button_container'>
      {renderHobbiesButtons()}
    </div>
    <div className='about_status_buttons'>
      <button onClick={allUsersAboutStatus.expand}>Expand All</button>
      <button onClick={allUsersAboutStatus.collapse}>Collapse All</button>
    </div>
  </div>;
};

export default FilterBar;
