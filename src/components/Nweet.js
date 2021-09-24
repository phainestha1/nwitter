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
                        <NweetUploadTrue>
                        <Buttons>
                            <RiDeleteBin7Fill
                                id="delete" 
                                size={18} 
                                onClick={onDeleteClick} />
                            <AiFillEdit
                                id="edit" 
                                size={18} 
                                onClick={toggleEditing} />
                        </Buttons>                            
                        <MiddleSection>
                        <MyNickname>
                            <h4>@{nweetObj.createdAt}</h4>
                            <h5>
                                {nweetObj.nickName === null 
                                    ? "John Doe" 
                                    : nweetObj.nickName}
                            </h5>
                        </MyNickname>
                        <NweetContent>
                            <h4>{nweetObj.text}</h4>
                        </NweetContent>

                        {nweetObj.attachmentUrl && 
                        <img src={nweetObj.attachmentUrl}
                        alt="nweetImage"
                        width="50ox" 
                        height="50px" />}
                        </MiddleSection>
                                                
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

                        <NweetUploadFalse>

                        <ProfileImage>
                        <img src={nweetObj.profileImage === null
                                      ? "https://nomadcoders.co/m.svg" 
                                      : nweetObj.profileImage
                                    } 
                             alt="profileImage" 
                            />
                        </ProfileImage>

                        <MiddleSectionFalse>
                        <YourNickName>
                        <h5>
                            {nweetObj.nickName === null ? "John Doe" : nweetObj.nickName}
                        </h5>
                        <h4>@{nweetObj.createdAt}</h4>
                        </YourNickName>
                        <NweetContentFalse>
                            <h5>{nweetObj.text}</h5>
                        </NweetContentFalse>
                        </MiddleSectionFalse>
                        
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
const MiddleSectionFalse = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    margin-left: 10px;
    border-left: 1px solid #d0c8cb;
`;
const YourNickName = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 5px;
    margin-bottom: 3px;

    // Date
    >h4{
        font-size: 11px;
        font-weight: 400;
        color: gray;
        padding-top: 4px;
        padding-left: 3px;
    }
    // Name
    >h5 {
        font-size: 17px;
    }
`;
const ProfileImage = styled.div`
    >img {
        width: 60px;
        height: 60px;
        border-radius: 999px;
        background-color: white;
    }
`;
const NweetContentFalse = styled.div`  
    display: flex;
    flex-direction: column;
    padding-left: 5px;

    >h4{
        font-size: 15px;
    }
    >h5{
        font-weight: 400;
        font-size: 15px;
    }
`;
const MiddleSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 0;
    padding-right: 8px;
    margin-right: 10px;
    border-right: 1px solid #d0c8cb;
`;
const NweetContent = styled.div`  
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    text-align: right;

    >h4 {
        font-weight: 400;
        font-size: 15px;
    }

`;
const MyNickname = styled.div`
    display: flex;
    justify-content: right;
    margin-bottom: 3px;

    >h4{
        font-size: 11px;
        font-weight: 400;
        color: gray;
        padding-top: 4px;
        padding-right: 3px;
    }
    >h5 {
        font-size: 17px;
    }
`;
const NweetUploadTrue = styled.div`
    display: flex;
    flex: 1;
    min-width: 430px;
    margin-left: auto;
    margin-right: 20px;

    align-items: center;
    justify-content: right;
    padding: 5px 10px 5px 10px;

    >h4 {
        margin-right: 15px;
        max-width: 350px;
    }
    >h5 {
    }
`;
const NweetUploadFalse = styled.div`
    display: flex;
    flex: 1;
    min-width: 430px;
    align-items: center;
    margin-left: 20px;
    padding: 5px 10px 5px 10px;
    >h4 {
        margin-left: 15px;
        max-width: 350px;
    }
`;
const Buttons = styled.div`
    display: flex;
    margin-top: 20px;
    cursor: pointer;


    #delete{
        transition: 0.2s;
    :hover {
        opacity: 0.3;
        }
    }
    #edit{
        transition: 0.2s;
    :hover {
        opacity: 0.3;
        }
    }
`;