import { dbService, storageService } from "fbase";
import { collection, 
         query,
         addDoc,
         orderBy, 
         onSnapshot } from "firebase/firestore";
import React, {useState, useEffect} from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
    const [nweets, setNweets] = useState([]);
    useEffect(() => {
        const queryData = query(collection(dbService, "nweets"), orderBy("createdAt", "desc"));
        onSnapshot(queryData, snapshot => {
            const nweetArr = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setNweets(nweetArr);
        });
        },[])
    
    return (
    <div>
        <NweetFactory userObj={userObj} />
        <div>
            {nweets.map(nweet => (
                <Nweet 
                    key={nweet.id} 
                    nweetObj={nweet} 
                    isOwner={nweet.creatorId === userObj.uid}/>
            ))}
        </div>
    </div>
    );
};

export default Home;