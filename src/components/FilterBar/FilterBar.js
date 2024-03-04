import "./FilterBar.css";

const FilterBar = ({ users }) => {
  const allUsersHobbies = [];

  users.forEach((user) => {
    for (let hobby of user.hobbies) {
      if (!allUsersHobbies.includes(hobby)) {
        allUsersHobbies.push(hobby);
      }
    }
  });
  allUsersHobbies.sort((a, b) => a.localeCompare(b));

  return (
    <div className="allHobbies">
      {allUsersHobbies.map((hobby, index) => {
        return <button key={index}>{hobby}</button>;
      })}
    </div>
  );
};

export default FilterBar;
