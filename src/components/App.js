import React, {useEffect, useState} from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";
import "style/app.css";

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
    <div className="appPage">
    {init ? <AppRouter
              refreshUser={refreshUser} 
              isLoggedIn={Boolean(userObj)} 
              userObj={userObj} 
              /> 
          : "Iitializing..."
            }
    <footer> &copy; 유한회사 노마드컴퍼니 <br /> {new Date().getFullYear()}년 천하제일 트위터 모방 경연대회  </footer>
    </div>
    );
  }

export default App;
