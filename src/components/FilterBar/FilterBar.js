import { useState, useEffect } from "react";
import "./FilterBar.scss";

const FilterBar = ({ users = [] }) => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    addHobbyList();
  }, []); // eslint-disable-line

  const addHobbyList = () => {
    const hobbySet = new Set();

    users.forEach((user) => {
      const { hobbies } = user;
      hobbies.forEach((hobby) => {
        hobbySet.add(hobby);
      });
    });

    setHobbies([...hobbySet]);
  };

  return (
    <section>
      {hobbies.map((filter, index) => {
        return <button key={index}>{filter}</button>;
      })}
    </section>
  );
};

export default FilterBar;
