import React, {useState, useRef} from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dbService, storageService } from "fbase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import Picker from 'emoji-picker-react';



const NweetFactory = ({ userObj }) => {
    const [nweetSecond, setNweetSecond] = useState("");
    const [attachment, setAttachment] = useState("");
    const [newModal, setNewModal] = useState(false);
    const fileInput = useRef();

    const today = new Date();
    const getMonth = today.getMonth();
    const getDate = today.getDate();
    const createdDate = `${getMonth + 1}월 ${getDate}일`;
    
    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if(attachment !== "") {            
        const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
        const response = await uploadString(attachmentRef, attachment, "data_url");
        attachmentUrl = await getDownloadURL(response.ref)
        }
        const nweetObjSecond = {
            text: nweetSecond,
            orderingBy: serverTimestamp(),
            createdAt: createdDate,
            creatorId: userObj.uid,
            nickName: userObj.displayName,
            profileImage: userObj.photoURL,
            attachmentUrl
        }
        await addDoc(collection(dbService, "nweetsSecond"), nweetObjSecond);
        
        setNweetSecond("");
        setAttachment("");
        fileInput.current.value = "";
    };
    const onChange = (event, emojiObject) => {
        const { target : {value} } = event;
        setNweetSecond(value);
    };
    const onFileChange = (event) => {
        const {target : {files} } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget : {result} } = finishedEvent;
            setAttachment(result);
        }
        reader.readAsDataURL(theFile);
    }
    const onClearAttachment = () => {
        setAttachment("");
        fileInput.current.value = "";
    }
    const modalToggle = () => {
        setNewModal((prev) => !prev);
    };

    const onEmojiClick = (event, emojiObject) => {
        setNweetSecond((prev) => prev + emojiObject.emoji);
    };

    return (
        <>        
        <IconContainer>
            <ImageContainer>
                <div className="attachImage">
                    <label for="image"> <FaCamera size={20} /> </label>
                    <input
                        id="image" 
                        type="file" 
                        accept="image/*" 
                        onChange={onFileChange}
                        ref={fileInput}
                        />
                </div>
            </ImageContainer>
            <AttachedImage className={`${attachment ? "" : "hidden"}`}>
               {attachment && ( 
                   <>
                    <CloseButton>
                       <button onClick={onClearAttachment}>
                           <CgClose size={20}/>
                       </button>
                    </CloseButton>
                       <img
                           src={attachment} 
                           alt="attachedImage" 
                           width="60px" 
                           height="60px" />
                   </>
               )}
               <h3>Here's Your Image!</h3>
            </AttachedImage>

            <ModalContainer>
                <button 
                    className="EmojiButton"
                    onClick={modalToggle} 
                    >
                    <HiOutlineEmojiHappy size={20} />
                </button>
                <div className={`modal ${newModal ? "" : "hidden"}`}>
                        <Picker onEmojiClick={onEmojiClick} />
                </div>
            </ModalContainer>
        </IconContainer>

        <form onSubmit = {onSubmit}>
        <Factory>
            <NweetInput>
                <input
                    value= {nweetSecond}
                    onChange={onChange} 
                    type="text" 
                    placeholder="Nweet Everyone!" 
                    maxLength={60}
                    >   
                </input>
            </NweetInput>
            <SubmitButton>
                <button
                    type="submit" 
                    value="nweet"><MdSend size={25}/>
                </button>
            </SubmitButton>
        </Factory>
        </form>

    </>
    )
}

export default NweetFactory;

const AttachedImage = styled.div`
        position: fixed;
        flex-direction: column;
        width: 278px;
        height: 318px;
        left: 550px;
        bottom: 10vh;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 
                    0 6px 6px rgba(0, 0, 0, 0.23);

    >img {
        display: flex;
        margin: auto;
        margin-top: 30px;
        width: 200px;
        height: 200px;
        border-radius: 999px;
    }
    >h3{
        text-align: center;
        padding-top: 20px;
        font-size: 15px;
        }
`;
const CloseButton = styled.div`

        display: flex;
        justify-content: right;
        padding-top: 2px;
        padding-left: 2px;
        margin-left: 5px;
        margin-right: 5px;
        border-bottom: 1px solid #49274b;
        
    >button {color: gray;
        background-color: white;
        border: none;
        cursor: pointer;
        transition: 0.2s;
        
        :hover {
            color: red;
        }
    }
`;

const Factory = styled.div`
    display: flex;
    border: none;
    flex-direction: row;
    justify-content: center;

    color: #3f3f3f;
`;
const NweetInput = styled.div`
    display: flex;
    width: 50vw;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 3px;
    
    >input{
        border: none;
        width: 100%;
        height: 100%;
    }
    >input:focus {outline: none;}

`;
const SubmitButton = styled.div`
    display: flex;

    >button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: 0.2s;
    }
    >button:hover {
        opacity: 0.5;
    }
`;
const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .hidden {
        display:none;
    }
`;
const ImageContainer = styled.div`

    .attachImage input {
        display: none;
        }
    .attachImage label {
        cursor: pointer;
        transition: 0.2s;
        :hover { color: gray; }
    }
`;
const ModalContainer = styled.div`
    display: flex;

    .EmojiButton {
        cursor: pointer;
        transition: 0.2s;
        background-color: transparent;
        border: none;

        :hover{ color: gray; }
    }
    
    .modal{
        position: fixed;
        left: 260px;
        bottom: 10vh;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 
                    0 6px 6px rgba(0, 0, 0, 0.23);
    }


    .hidden {
        display: none;
    }
`;