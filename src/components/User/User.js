import './User.css';

const User = ({ user, singleUserAboutToggle }) => {
  const { about, age, company, country, name, photo, showAbout, id, hobbies } = user;

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
        <div className={`User__about ${showAbout ? "" : "User__about__hidden"}`}>
          <h3>About {name.split(' ')[0]}:</h3>
          <p>{about}</p>
        </div>
      </div>
      <div className="User__controls">
        <button onClick={() => singleUserAboutToggle(id)}>click me</button>
      </div>
    </section>
  );
};

export default User;
