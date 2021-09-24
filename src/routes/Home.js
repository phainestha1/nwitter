import React, {useState, useEffect, useRef} from "react";
import { dbService } from "fbase";
import { collection, 
         query,
         orderBy, 
         onSnapshot } from "firebase/firestore";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";
import styled from "styled-components";

const Home = ({ userObj }) => {
    const [nweets, setNweets] = useState([]);
    const chatRef = useRef(null);
    
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

    useEffect(() => {
        console.log(chatRef.current);
        chatRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, [nweets]);
        
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
            <ChatBottom ref={chatRef} />
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

`;
const ChatBottom = styled.div``;