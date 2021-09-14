# Nweet App

<!-- Just to Memorize Below Function! -->
import { getDocs } from "firebase/firestore";

    const getNweets = async() => {
        const dbNweets = await getDocs(collection(dbService, "nweets"));
        dbNweets.forEach((document) => {
            const nweetObject = {
                ...document.data(), 
                id: document.id,
            }
            setNweets(prev => [nweetObject, ...prev])
        });
    }  

            getNweets();