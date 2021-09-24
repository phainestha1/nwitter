import React, {useState, useEffect, useRef} from "react";
import { dbService } from "fbase";
import { collection, 
         query,
         orderBy,  
         onSnapshot } from "firebase/firestore";
import NweetSecond from "components/NweetSecond";
import NweetFactorySecond from "components/NweetFactorySecond";
import styled from "styled-components";

const Home = ({ userObj }) => {
    const [nweetsSecond, setNweetsSecond] = useState([]);
    const chatRef = useRef(null);
    
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

    useEffect(() => {
        chatRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, [nweetsSecond]);
        
    return (
    <HomeContainer>
        <ChannelTitle>
            <h1># Challenge</h1>
            <h2>Challengers Never Give Up</h2>
        </ChannelTitle>
        <NweetContainer>
            <div className="nweetBox">
                {nweetsSecond.map(nweetSecond => (
                    <NweetSecond 
                        key={nweetSecond.id} 
                        nweetObjSecond={nweetSecond} 
                        isOwner={nweetSecond.creatorId === userObj.uid}
                        userObj={userObj}/>
                ))}
            <ChatBottom ref={chatRef} />
            </div>
        </NweetContainer>

        <ChatContainer>
            <NweetFactorySecond userObj={userObj} />
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

const ChannelTitle = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #d0c8cb;
    
    >h1{
        padding: 10px 0 10px 18px;
        font-size: 20px;
        font-weight: 400;
    }
    >h2 {
        color: gray;
        font-style: italic;
        font-size: 14px;
        font-weight: 400;
        margin-top: 15px;
        margin-left: 10px;
    }
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