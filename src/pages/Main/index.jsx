import "./style.css";
import Person from "../../components/Person";
import Modal from "../../components/Modal";
import api from "../../services/api";
import houses from '../../data';
import { useEffect, useState } from "react";

function Main() {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPerson, setCurrentPerson] = useState([]);
  const [house, setHouse] = useState('');

  function handlePicture(item) {
    let picture = houses.find((house) => {
      return house.name === item.house
    });
    setHouse(picture.image);
  }


  function handleSelectPerson(item) {
    setShowModal(true);
    setCurrentPerson(item);
    handlePicture(item)
  };

  function handleClose() {
    setShowModal(false);
  }

  async function loadPeople() {
    try {
      const response = await api.get("/api/characters/students");
      const main = response.data.splice(10);
      setStudents(response.data);
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    loadPeople();
  }, []);

  
  return (
    <div className="container-main">
      <div className="container-main-title">
        <h1>Hogwarts Students</h1>
      </div>
      <div className="container-main-info">
        {students.map((item) => (
          <Person
            key={item.id}
            item={item}
            handleSelectPerson={handleSelectPerson}
          />
        ))}
      </div>
      <Modal
        show={showModal}
        handleClose={handleClose}
        currentPerson={currentPerson}
        houseImage={house}
      />
    </div>
  );
}

export default Main;
