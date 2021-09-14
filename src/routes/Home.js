import { dbService } from "fbase";
import { addDoc,  
         collection, 
         query, 
         onSnapshot } from "firebase/firestore";
import React, {useState, useEffect} from "react";

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    useEffect(() => {
        const realTimeUpdate = query(collection(dbService, "nweets"));
        onSnapshot(realTimeUpdate, snapshot => {
            const nweetArr = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setNweets(nweetArr);
            console.log("something happened");
        });
        },[])
    const onSubmit = async (event) => {
        event.preventDefault();
        await addDoc(collection(dbService, "nweets"), {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid
        });
        setNweet("");
    };
    const onChange = (event) => {
        const { target : {value} } = event;
        setNweet(value);
    }

    return (
    <div>
        <form onSubmit = {onSubmit}>
            <input 
                value={nweet}
                onChange={onChange} 
                type="text" 
                placeholder="What's on your mind?" 
                maxLength={100}
            />
            <input type="submit" value="Nweet" />
        </form>
        <div>
            {nweets.map(nweet => (
            <div key={nweet.id}>
                <h4>{nweet.text}</h4>
            </div>)
            )}
        </div>
    </div>
    );
};

export default Home;