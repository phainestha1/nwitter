import { dbService } from "fbase";
import { collection, 
         query,
         orderBy, 
         onSnapshot } from "firebase/firestore";
import React, {useState, useEffect} from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;


    .nweetBox {
        position: flex;
        
        width: 100%;
        height: 750px;
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


const Home = ({ userObj }) => {
    const [nweets, setNweets] = useState([]);
    useEffect(() => {
        const queryData = query(collection(dbService, "nweets"), orderBy("createdAt", "asc"));
        onSnapshot(queryData, snapshot => {
            const nweetArr = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setNweets(nweetArr);
        });
        },[])
    
    return (
    <>
    <Container>
        <div className="nweetBox">
            {nweets.map(nweet => (
                <Nweet 
                    key={nweet.id} 
                    nweetObj={nweet} 
                    isOwner={nweet.creatorId === userObj.uid}
                    userObj={userObj}/>
            ))}
        </div>
    </Container>
        <NweetFactory userObj={userObj} />
    </>    
    );
};

export default Home;