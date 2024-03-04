import './FilterBar.css';


const FilterBar = ({users}) => {
  const hobbyArr =[];
  users.filter(user => hobbyArr.push(...user.hobbies));
  const hobby = hobbyArr.filter((hobby,i,arr) => arr.indexOf(hobby) === i )

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
