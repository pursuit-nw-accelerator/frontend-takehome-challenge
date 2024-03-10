//STYLING
import './User.css';

const User = ({ showAbout, user, onClick }) => {
  const { about, age, company, country, name, photo, hobbies } = user;

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
          <li>Hobbies: {hobbies.join(", ")}</li>
        </ul>
        { showAbout && (
        <div className="User__about">
          <h3>About {name.split(' ')[0]}:</h3>
          <p>{about}</p>
        </div>
        )}
      </div>
      <div className="User__controls">
        <button className="toggle-button"
        onClick={onClick}>
        {!showAbout ? "More Details" : "Hide Details"}
        </button>
      </div>
    </section>
  );
};

export default User;
