import { dbService } from "fbase";
import { collection, 
         query,
         orderBy, 
         onSnapshot } from "firebase/firestore";
import React, {useState, useEffect} from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";
import styled from "styled-components";

const Home = ({ userObj }) => {
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
    <HomeContainer>
        <NweetContainer>
            <div className="nweetBox">
                {nweets.map(nweet => (
                    <Nweet 
                        key={nweet.id} 
                        nweetObj={nweet} 
                        isOwner={nweet.creatorId === userObj.uid}
                        userObj={userObj}/>
                ))}
            </div>
        </NweetContainer>

        <ChatContainer>
            <NweetFactory userObj={userObj} />
        </ChatContainer>
    </HomeContainer>    
    );
};

export default Home;

const HomeContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
`;

const NweetContainer = styled.div`
    display: flex;
    height: 85vh;
    /* display: none;   */
    
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
        background: gray; 
        }
    .nweetBox::-webkit-scrollbar-thumb:hover {
        background: #555; 
        }
`;

const ChatContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background: linear-gradient(transparent, white);

`;