import { useState } from "react";
import "./User.css";

const User = ({ user }) => {
  const [showMore, setShowMore] = useState(false);
  const { about, age, company, country, name, photo, hobbies } = user;

  function UserHobbies(hobbiesArray) {
    let allHobbies = "";
    for (let hobby of hobbiesArray) {
      allHobbies += `${hobby}, `;
    }
    return allHobbies.slice(0, allHobbies.length - 2);
  }

  return (
    <section className="User">
      <div className="User__avatar">
        <img src={photo} alt={name} />
      </div>
      <div className="User__info">
        <ul>
          <li className="User__name">{name}</li>
          <li>Age: {age}</li>
          <li>Country: {country}</li>
          <li>Company: {company}</li>
          <li>Hobbies: {UserHobbies(hobbies)}</li>
        </ul>
        {showMore && (
          <div className="User__about">
            <h3>About {name.split(" ")[0]}:</h3>
            <p>{about}</p>
          </div>
        )}
      </div>
      <div className="User__controls">
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "show less" : "show more"}
        </button>
      </div>
    </section>
  );
};

export default User;
