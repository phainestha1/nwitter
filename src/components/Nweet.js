import React, {useState} from "react";
import { dbService, storageService } from "fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
`;

const Nweet = ({ nweetObj, isOwner, userObj }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    
    const onDeleteClick = async() => {
        const ok = window.confirm("Are you sure that you want to delete this nweet?");
        if(ok) {
            await deleteDoc(doc(dbService, `nweets/${nweetObj.id}`));
            await deleteObject( ref(storageService, nweetObj.attachmentUrl) );
        } 
    }
    const toggleEditing = () => {
        setEditing((prev) => !prev);
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        const ref = doc(dbService, `nweets/${nweetObj.id}`);
        await updateDoc(ref, {text: newNweet});
        setEditing(false);
    }
    const onChange = (event) => {
        const { target : {value} } = event;
        setNewNweet(value);
    }

    return (  
        <Container>
            {
                editing 
                ? 
                    (
                    <>  
                        {isOwner &&
                        <>
                        <form onSubmit={onSubmit} >
                            <input 
                                type="text" 
                                placeholder="Edit Your Nweet" 
                                value={newNweet} 
                                onChange= {onChange}
                                required 
                            />
                            <input 
                            type="submit" 
                            value="Update Nweet" 
                            />
                        </form>
                        <button onClick={toggleEditing}> 
                            Cancel 
                        </button>
                        </>  
                        }
                    </>
                    )
                :
                    (<>
                    <img src={userObj.photoURL} 
                         alt="profileImage" 
                         width="70px"
                         height="70px"
                         />
                    <h4>
                        {nweetObj.text}
                    </h4>
                    {nweetObj.attachmentUrl && 
                    <img src={nweetObj.attachmentUrl}
                         alt="nweetImage"
                         width="50ox" 
                         height="50px" />
                    }
                    {isOwner && (   
                        <>
                            <button onClick={onDeleteClick}>
                                Delete Nweet
                            </button>
                            <button onClick={toggleEditing}>
                                Edit Nweet
                            </button>
                        </>
                    )}
                    </>)
            }
        </Container>
    );
}

export default Nweet;