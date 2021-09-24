import React, {useState} from "react";
import { dbService, storageService } from "fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin7Fill, RiChatNewFill } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";


const Nweet = ({ nweetObjSecond, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweetSecond, setNewNweetSecond] = useState(nweetObjSecond.text);

    const onDeleteClick = async() => {
        const ok = window.confirm("Are you sure that you want to delete this nweet?");
        if(ok) {
            await deleteDoc(doc(dbService, `nweetsSecond/${nweetObjSecond.id}`));
            await deleteObject( ref(storageService, nweetObjSecond.attachmentUrl) );
        } 
    }
    const toggleEditing = () => {
        setEditing((prev) => !prev);
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        const ref = doc(dbService, `nweetsSecond/${nweetObjSecond.id}`);
        await updateDoc(ref, {text: newNweetSecond});
        setEditing(false);
    }
    const onChange = (event) => {
        const { target : {value} } = event;
        setNewNweetSecond(value);
    }

    return (  
        <Container>
            {
                editing 
                ? 
                    (
                    <>  
                        {isOwner &&
                        <form onSubmit={onSubmit} >
                        <NweetEditInput>
                        <InputLeft>
                            <input 
                                type="text" 
                                placeholder="Edit Your Nweet" 
                                value={newNweetSecond} 
                                onChange={onChange}
                                required 
                            />
                        </InputLeft>
                        <InputRight>
                        <button type="submit">
                            <RiChatNewFill size={20} />
                        </button> 
                        <button onClick={toggleEditing}> 
                            <GiCancel size={18} />
                        </button>
                        </InputRight>
                        </NweetEditInput>  
                        </form>
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
                        <NweetImageTrue>
                            {nweetObjSecond.attachmentUrl && 
                            <img src={nweetObjSecond.attachmentUrl}
                            alt="nweetImage"
                            width="50ox" 
                            height="50px" />}
                        </NweetImageTrue>
                        
                        <MiddleSection>
                            <MyNickname>
                            <h4>@{nweetObjSecond.createdAt}</h4>
                            <h5>
                                {nweetObjSecond.nickName === null 
                                    ? "John Doe" 
                                    : nweetObjSecond.nickName}
                            </h5>
                        </MyNickname>
                        <NweetContent>
                            <h4>{nweetObjSecond.text}</h4>
                        </NweetContent>
                        

                        </MiddleSection>
                                                
                        <ProfileImage>
                            <img src={nweetObjSecond.profileImage === null
                                      ? "https://nomadcoders.co/m.svg" 
                                      : nweetObjSecond.profileImage
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
                        <img src={nweetObjSecond.profileImage === null
                                      ? "https://nomadcoders.co/m.svg" 
                                      : nweetObjSecond.profileImage
                                    } 
                             alt="profileImage" 
                            />
                        </ProfileImage>

                        <MiddleSectionFalse>
                        <YourNickName>
                        <h5>
                            {nweetObjSecond.nickName === null ? "John Doe" : nweetObjSecond.nickName}
                        </h5>
                        <h4>@{nweetObjSecond.createdAt}</h4>
                        </YourNickName>
                        <NweetContentFalse>
                            <h5>{nweetObjSecond.text}</h5>
                        </NweetContentFalse>
                        </MiddleSectionFalse>
                        <NweetImageFalse>   
                        {nweetObjSecond.attachmentUrl && 
                        <img src={nweetObjSecond.attachmentUrl}
                            alt="nweetImage"
                            width="50ox" 
                            height="50px" />}
                        </NweetImageFalse>
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
const NweetEditInput =styled.div`
    display: flex;
    flex: 1;
    justify-content: right;
    margin-right: 100px;
    margin-bottom: 23px;
    background-color: transparent;
`;
const InputLeft = styled.div`
    display: flex;
    >input{
        padding: 10px;
        width: 300px;
    }
`;
const InputRight = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    
    >button {
    background-color: white;
    border: none;
    transition: 0.2s;
    cursor: pointer;
    
    :hover {
        color: steelblue;
        opacity: 0.8;
    }
    }
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
        color: #01729d;
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
const NweetImageTrue = styled.div`
    display: flex;
    margin-right: 15px;
    >img {
        width: 80px;
        height: 80px;
        border: 2px solid gray;
        border-radius: 4px;
        transition: 0.4s;
        :hover {
            border-color: white;
            border-radius: 20px;
            width: 300px;
            height: 300px;
        }
    }
`;
const NweetImageFalse = styled.div`
    display: flex;
    margin-left: 15px;
    >img {
        width: 80px;
        height: 80px;
        border: 2px solid gray;
        border-radius: 4px;
        transition: 0.4s;
        :hover {
            border-color: white;
            border-radius: 20px;
            width: 300px;
            height: 300px;
        }
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
        color: #01729d
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
    margin-right: 12px;
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