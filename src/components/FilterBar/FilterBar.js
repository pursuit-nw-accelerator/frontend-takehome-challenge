import './FilterBar.css';

const FilterBar = ({users, setExpanded}) => {

  const toggleAll = () =>{
    setExpanded(users.map((user) => user.id))
  }
  const toggleCollapseAll = () =>{
    setExpanded([])
  }
  const listOfHobbies = [];

  users.forEach(user => {
    user.hobbies.forEach((hobby) => {
      if (!listOfHobbies.includes(hobby)){
        listOfHobbies.push(hobby)
      }
    })
  });

  listOfHobbies.sort((a,b) => {
    if(a < b){
      return -1
    }
    else if (b < a){
      return 1
    }
    else{return 0}
  })
  console.log(listOfHobbies)
  return(
  <div className='filterBar'>
    <div className='hobbyList'>
      {listOfHobbies.map((hobby) => {
        return <button>{hobby}</button>
      })}
    </div>
    <div className='expandCollapseAll'>
      <button onClick={toggleAll}>Expand All</button>
      <button onClick={toggleCollapseAll}>Collapse All</button>
    </div>
  </div>);
};

export default FilterBar;
