import React, {useState} from 'react'
import styled from "styled-components";
import Picker from 'emoji-picker-react';


function Weather() {
  // const [chosenEmoji, setChosenEmoji] = useState(null);
  const [newModal, setNewModal] = useState(false);

  const modalToggle = () => {
    setNewModal((prev) => !prev);
  };

    return (
        <Container>
            <button onClick={modalToggle}>Open Modal</button>
            <div className={`modal ${newModal ? "" : "hidden"}`}>
              <div className="modal_overlay"></div>
              
              <div className="modal_content">
                <Picker />
              </div>

            </div>

        </Container>
    )
}

export default Weather;


const Container = styled.div`

  .modal {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  top: 33px;
  left: 50%;
  width: 300px;
  background-color: transparent;
  }

  .modal_overlay {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }

  .modal_content {
    >button {
      margin:0;
    }
  }

  .hidden {
    display: none;
  }
`;