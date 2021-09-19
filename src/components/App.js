import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";


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
            : "Iitializing..."
              }
    </div>
    );
  }

export default App;
