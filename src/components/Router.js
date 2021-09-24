import React, { useEffect, useState } from "react";
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
import { dbService } from "fbase";
import { collection, 
         query,
         orderBy, 
         onSnapshot } from "firebase/firestore";

const AppRouter = ( {refreshUser ,isLoggedIn, userObj} ) => {

    const [nweets, setNweets] = useState([]);
    useEffect(() => {
        const queryData = query(collection(dbService, "nweets"), orderBy("orderingBy", "asc"));
        onSnapshot(queryData, snapshot => {
            const nweetArr = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setNweets(nweetArr);
        });
        },[])

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
                                <ProfileSection>
                                <ProfileTop>
                                    <Profile 
                                        userObj={userObj} 
                                        refreshUser={refreshUser}
                                        nweets={nweets}/>
                                </ProfileTop>
                                <ProfileBottom>
                                <div className="nweetBox">
                                    {nweets.map(nweet => (
                                        nweet.creatorId === userObj.uid 
                                        && 
                                    <div>
                                        <img id="profile" 
                                             src={nweet.profileImage === null
                                                    ? "https://nomadcoders.co/m.svg" 
                                                    : nweet.profileImage
                                                }  
                                             alt="profile"/>
                                        <div>
                                            <div>
                                            <h2>
                                                {nweet.nickName === null ? "John Doe" : nweet.nickName}
                                            </h2>
                                            <h4>@{nweet.createdAt}</h4>
                                            </div>
                                            <h3>{nweet.text}</h3>
                                        </div>
                                    </div>
                                    )        
                                    )}
                                </div>
                                </ProfileBottom>
                                </ProfileSection>
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
const ProfileSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;
const ProfileTop = styled.div`

`;
const ProfileBottom = styled.div`
    display: flex;
    width: 50%;
    height: 45vh;
    padding: 10px 23px 10px 23px;
    border: 1px solid #d0c8cb;
    border-radius: 5px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;

    .nweetBox {
        position: flex;
        width: 100%;
        overflow: scroll;
        overflow-x: hidden;
        }
    .nweetBox::-webkit-scrollbar {
        width: 10px;
        }
    .nweetBox::-webkit-scrollbar-track {
        background: transparent; 
        }
    .nweetBox::-webkit-scrollbar-thumb {
        background: #d0c8cb;; 
        }
    .nweetBox::-webkit-scrollbar-thumb:hover {
        background: gray; 
        }

    // Nweet Profile Image
    >div>div {
        display: flex;
        margin-bottom: 13px;
    }
    >div>div>img {
        display: flex;
        width: 60px;
        height: 60px;
        border-radius: 999px;
        margin-right: 20px;
    }
    
    // Nweet NickName
    >div>div>div>div {
        display: flex;
        margin-bottom: 5px;
    }
    >div>div>div>div>h2 {
        font-size: 18px;
        font-weight: 400;
        color: #3f3f3f;
    }

    // Nweet CreatedAt
    >div>div>div>div>h4 {
        font-size: 12px;
        font-weight: 400;
        padding-top: 4px;
        padding-left: 5px;
    }
    
    //Nweet Message
    >div>div>div>h3 {
        font-size: 15px;
        font-weight: 400;
        color: #3f3f3f
    }
    >div>div>div {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
        border-left: 1px solid #d0c8cb;
    }
`;