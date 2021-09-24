import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import styled from "styled-components";


function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      } else {
        setUserObj(null);
      }
      setInit(true)
    });  
  })
  const refreshUser = () => {
    setUserObj({...authService.currentUser});
  };

    return (
    <div>
      {init ? <AppRouter
                refreshUser={refreshUser} 
                isLoggedIn={Boolean(userObj)} 
                userObj={userObj} 
                /> 
            : <LoadingContainer>
              <img src="https://i.stack.imgur.com/MEBIB.gif"
                   alt="Loading..."
                   />
              </LoadingContainer>
              }
    </div>
    );
  }

export default App;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;