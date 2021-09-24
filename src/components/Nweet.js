import React, {useState} from "react";
import { dbService, storageService } from "fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin7Fill } from "react-icons/ri";


const Nweet = ({ nweetObj, isOwner }) => {
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
                                onChange={onChange}
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
                    (isOwner 
                        ? 
                        (<>
                        <MyNickname>
                        <h5>
                            {nweetObj.nickName === null ? "John Doe" : nweetObj.nickName}
                        </h5>
                        </MyNickname>
                        <NweetUploadTrue>
                            
                        <NweetContent>
                            <h5>{nweetObj.createdAt}</h5>
                            <h4>{nweetObj.text}</h4>
                        </NweetContent>

                        {nweetObj.attachmentUrl && 
                        <img src={nweetObj.attachmentUrl}
                            alt="nweetImage"
                            width="50ox" 
                            height="50px" />}
 
                            <Buttons>
                                <RiDeleteBin7Fill 
                                    size={18} 
                                    onClick={onDeleteClick} />
                                <AiFillEdit 
                                    size={18} 
                                    onClick={toggleEditing} />
                            </Buttons>
                        <ProfileImage>
                            <img src={nweetObj.profileImage === null
                                      ? "https://nomadcoders.co/m.svg" 
                                      : nweetObj.profileImage
                                    } 
                                 alt="profileImage" 
                            />
                        </ProfileImage>
                        </NweetUploadTrue> 
                        </>)
                    :
                        (<>
                        <YourNickName>
                        <h5>
                            {nweetObj.nickName === null ? "John Doe" : nweetObj.nickName}
                        </h5>
                        </YourNickName>
                        <NweetUploadFalse>

                        <ProfileImage>
                        <img src={nweetObj.profileImage === null
                                      ? "https://nomadcoders.co/m.svg" 
                                      : nweetObj.profileImage
                                    } 
                             alt="profileImage" 
                            />
                        </ProfileImage>
                        
                        <NweetContent>
                            <h5>{nweetObj.createdAt}</h5>
                            <h4>{nweetObj.text}</h4>
                        </NweetContent>

                        {nweetObj.attachmentUrl && 
                        <img src={nweetObj.attachmentUrl}
                            alt="nweetImage"
                            width="50ox" 
                            height="50px" />}
                        </NweetUploadFalse>
                        </>
                        )
                    )
            }
        </Container>
    );
}

export default Nweet;


const Container = styled.div`
    
`;

const MyNickname = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 35px;
    margin-bottom: 3px;
`;

const YourNickName = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 35px;
    margin-bottom: 3px;
`;

const ProfileImage = styled.div`
    >img {
        width: 60px;
        height: 60px;
        border-radius: 999px;
        background-color: white;
    }
`;

const NweetContent = styled.div`
    
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    
`;

const NweetUploadTrue = styled.div`
    display: flex;
    width: 30%;
    min-width: 430px;
    margin-left: auto;
    margin-right: 20px;
    margin-bottom: 1vh;
    border-radius: 20px;
    background-color: honeydew;
    align-items: center;
    justify-content: right;
    padding: 10px 10px 10px 10px;

    >h4 {
        margin-right: 15px;
        max-width: 350px;

    }
    >h5 {

    }
`;
const NweetUploadFalse = styled.div`
    display: flex;
    width: 30%;
    min-width: 430px;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 1vh;
    border-radius: 20px;
    background-color: honeydew;
    padding: 10px 10px 10px 10px;

    >h4 {
        margin-left: 15px;
        max-width: 350px;
    }
`;


const Buttons = styled.div`
    cursor: pointer;
    margin-right: 10px;
    
`;