import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Reference from "../routes/Reference";
import Weather from "../routes/Weather";
import Todo from "../routes/Todo";
import Feeling from "../routes/Feeling";
import Navigation from "./Navigation";
import SideBar from "./SideBar";
import styled from "styled-components";

const AppRouter = ( {refreshUser ,isLoggedIn, userObj} ) => {
    return (
        <Router>
            <WholeApp>
            <AppHead>
                {isLoggedIn && <Navigation userObj={userObj} />}
            </AppHead>

            <AppBody>
                {isLoggedIn && <SideBar userObj={userObj} />}
                <Switch>
                    {isLoggedIn 
                        ? 
                            <>
                            <Route exact path="/">
                                <Home userObj={userObj} />
                            </Route>
                            
                            <Route exact path="/profile">
                                <Profile 
                                    userObj={userObj} 
                                    refreshUser={refreshUser} 
                                />
                            </Route>
                            <Route exact path="/reference">
                                <Reference 
                                    userObj={userObj} 
                                />
                            </Route>
                            <Route exact path="/weather">
                                <Weather 
                                    userObj={userObj} 
                                />
                            </Route>
                            <Route exact path="/todo">
                                <Todo 
                                    userObj={userObj} 
                                />
                            </Route>
                            <Route exact path="/feeling">
                                <Feeling 
                                    userObj={userObj} 
                                />
                            </Route>
                            </> 
                        : 
                            <>
                            <Route exact path="/"> 
                                <Auth /> 
                            </Route>
                            </>
                    }
                </Switch>
            </AppBody>
            </WholeApp>
        </Router>
    )
}

export default AppRouter; 

const WholeApp = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    height: 100vh;
`;
const AppHead = styled.div`
    display: flex;
    width: 100vw;  

`;
const AppBody = styled.div`
    display: flex;
    width: 100vw;
    height: inherit;
`;