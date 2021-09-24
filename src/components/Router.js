import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import HomeSecond from "../routes/HomeSecond";
import Profile from "../routes/Profile";
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

        const [nweetsSecond, setNweetsSecond] = useState([]);
        useEffect(() => {
            const queryData = query(collection(dbService, "nweetsSecond"), orderBy("orderingBy", "asc"));
            onSnapshot(queryData, snapshot => {
                const nweetArr = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setNweetsSecond(nweetArr);
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
                            <Route exact path="/challenge">
                                <HomeSecond userObj={userObj} />
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
                                <ReactContainer>
                                <ReactMessage>
                                    <h1>행복한 리액트 방</h1>
                                </ReactMessage>
                                <div className="nweetBox">
                                    {nweets.map(nweet => (
                                        nweet.creatorId === userObj.uid 
                                        && 
                                    <div key={nweet.id}>
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
                                        {nweet.attachmentUrl && 
                                        <img 
                                        src={nweet.attachmentUrl}
                                        alt="nweetImage"
                                        width="50ox" 
                                        height="50px" />}
                                    </div>        
                                    ))}
                                </div>
                                </ReactContainer>
                                <ChallengeContainer>
                                <ChallengeMessage>
                                    <h1>Challenge</h1>
                                </ChallengeMessage>
                                <div className="nweetBox">
                                    {nweetsSecond.map(nweetSecond => (
                                        nweetSecond.creatorId === userObj.uid 
                                        && 
                                        <div key={nweetSecond.id}>
                                        <img id="profile" 
                                             src={nweetSecond.profileImage === null
                                                    ? "https://nomadcoders.co/m.svg" 
                                                    : nweetSecond.profileImage
                                                }  
                                             alt="profile"/>
                                        <div>
                                            <div>
                                            <h2>
                                                {nweetSecond.nickName === null ? "John Doe" : nweetSecond.nickName}
                                            </h2>
                                            <h4>@{nweetSecond.createdAt}</h4>
                                            </div>
                                            <h3>{nweetSecond.text}</h3>
                                        </div>
                                        {nweetSecond.attachmentUrl && 
                                        <img 
                                        src={nweetSecond.attachmentUrl}
                                        alt="nweetImage"
                                        width="50ox" 
                                        height="50px" />}
                                    </div>        
                                    ))}
                                </div>
                                </ChallengeContainer>

                                </ProfileBottom>
                                </ProfileSection>
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
    flex: 0.8;
    justify-content: center;
    margin-top: 15px;

`;
const ReactContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.4;
    height: 40vh;
    margin-right: 15px;
    border: 1px solid #d0c8cb;
    border-radius: 5px;
    padding: 10px 23px 10px 23px;

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
        margin-right: 8px;
        border-left: 1px solid #d0c8cb;

        }
`;
const ChallengeContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.4;
    height: 40vh;
    margin-left: 15px;
    padding: 10px 23px 10px 23px;
    border: 1px solid #d0c8cb;
    border-radius: 5px;
    padding: 10px 23px 10px 23px;

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
        margin-right: 8px;
        border-left: 1px solid #d0c8cb;

    }
`;
const ReactMessage = styled.div`
    display: flex;
    justify-content: center;
    >h1 {
        text-align: center;
        font-size: 17px;
        font-weight: 400;
        width: 80%;
        padding-bottom: 5px;
        margin-bottom: 15px;
        border-bottom: 1px solid #d0c8cb;
    }
`;
const ChallengeMessage = styled.div`
    display: flex;
    justify-content: center;
    >h1 {
        text-align: center;
        font-size: 17px;
        font-weight: 400;
        width: 80%;
        padding-bottom: 5px;
        margin-bottom: 15px;
        border-bottom: 1px solid #d0c8cb;
    }

`;