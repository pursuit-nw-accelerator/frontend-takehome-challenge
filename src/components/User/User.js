import "./User.scss";

const User = ({ user, handleExpandedList, onClick, selectedHobbies }) => {
  const { about, age, company, country, hobbies, name, photo } = user;

  const renderSelectedHobbies = () => {
    return hobbies.map((hobby, index) => {
      if (selectedHobbies.includes(hobby)) {
        return (
          <span key={index}>
            <span className="highlight" style={{ color: "lightgreen" }}>
              {hobby}
            </span>
            {index === hobbies.length - 1 ? "" : ", "}
          </span>
        );
      }
      return hobby + (index === hobbies.length - 1 ? "" : ", ");
    });
  };

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
          <li>Hobbies: {renderSelectedHobbies()}</li>
        </ul>
        {handleExpandedList && (
          <div className="User__about">
            <h3>About {name.split(" ")[0]}:</h3>
            <p>{about}</p>
          </div>
        )}
      </div>
      <div className="User__controls">
        <button onClick={onClick}>
          {handleExpandedList ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default User;
