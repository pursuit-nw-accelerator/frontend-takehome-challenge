import './FilterBar.css';
// import Hobby from'./Hobby'


const FilterBar = ({users}) => {
  // console.log(users[0].hobbies);
  const hobbyArr =[];
  users.filter(user => hobbyArr.push(...user.hobbies));
  const hobby = hobbyArr.filter((hobby,i,arr) => arr.indexOf(hobby) === i )
  // console.log(hobby);

  const handleOnClick = () => {
    console.log("clicked");
  }
  return( 
    <>
    <h2>Filter by hobby</h2>
      <div>
        <div className='hobby__container'>
        {hobby.map((hobby, i) => <button key={i} onClick= {handleOnClick}  className='hobby'>{hobby}</button>)}
        </div>
      </div>
    </>
    )
};

export default FilterBar;
