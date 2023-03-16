import "./style.css";

function Person({item, handleSelectPerson}) {
  
  return (
    <div className="container-person" onClick={() => handleSelectPerson(item)}>
      <div className="container-person-img">
        <img src={item.image} alt="Profile"></img>
      </div>
      <div className="container-person-info">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
}

export default Person;
