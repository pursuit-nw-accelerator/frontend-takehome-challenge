import { useState } from "react";
import "./User.css";

const User = ({ user }) => {
  const { about, age, company, country, name, photo } = user;
  const [show, setShow] = useState(true);

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
          <li>Hobbies: {user.hobbies.join(", ")}</li>
        </ul>
        {show ? (
          <div className="User__about">
            <h3>About {name.split(" ")[0]}:</h3>
            <p>{about}</p>
          </div>
        ) : null}
      </div>

      <div className="User__controls">
        <button type="click" onClick={() => setShow(!show)}>
          {show ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
};

export default User;
