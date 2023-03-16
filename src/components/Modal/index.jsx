import './style.css';
import btnClose from '../../assets/btn-close.svg';

function Modal({show, handleClose, currentPerson, houseImage}) {
  console.log(currentPerson)
  return (
    <>
      {show &&
        <div className="modal">
          <div className="container-modal">
            <div className="container-modal-infos">
              <img 
                src={btnClose}
                alt="Botão fechar"
                className="btn-close"
                onClick={() => handleClose(true)}></img>
              <div>
                <img
                  className="container-modal-img"
                  src={currentPerson.image}
                  alt="Profile"></img>
              </div>
              <div className="container-modal-info">
                <div className='info-detail'>                
                  <span><strong>Name:</strong> {currentPerson.name}</span>
                  <span><strong>Patronus:</strong> {currentPerson.patronus}</span>
                  <span><strong>Birthday:</strong> {currentPerson.dateOfBirth}</span>
                  <span><strong>House:</strong> {currentPerson.house}</span>
                </div>
                <img src={houseImage} alt="House"></img>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Modal;