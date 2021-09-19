import React, {useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import { dbService, storageService } from "fbase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

const Container = styled.div`
    /* position: absolute; */
    width: 80%;
    left: 10%;
    height: 10%;
    bottom: 0;

    /* Profile Image */
    .profile {
        position: absolute;
        border: none;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        left: 350px;
        bottom: 24px;
    }

    /* Nweet Input Box */
    .nweetInputBox {
        position: fixed;
        width: 50%;
        height: 10%;
        left: 25%;
        border: 1px solid black;
        bottom: 10px;
        margin-left: 10px;
    }
    .nweetInputBox:focus {
        /* outline: none; */
    }

    /* Image Attachment */
    .attachImage input {
        position: fixed;
        clip:rect(0,0,0,0);
    }
    .attachImage label {
        position: fixed;
        bottom: 12%;
        left: 25%;
        margin-left: 10px;
        cursor: pointer;
        transition: 0.2s;
    }
    .attachImage label:hover {
        color: gray;
    }

    /* Nweet Submit */
    .nweetSubmit {
        position: fixed;
        bottom: 40px;
        left: 80%;
        height: 60px;
        border: none;
        background-color: skyblue;
    }
    .nweetSubmit:hover {
        background-color: cadetblue;
        color: honeydew;
    }

`;

const NweetFactory = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if(attachment !== "") {            
        const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
        const response = await uploadString(attachmentRef, attachment, "data_url");
        attachmentUrl = await getDownloadURL(response.ref)
        }
        const nweetObj = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        }

        await addDoc(collection(dbService, "nweets"), nweetObj);
        setNweet("");
        setAttachment("");
    };
    const onChange = (event) => {
        const { target : {value} } = event;
        setNweet(value);
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
    }

    return (
        <Container>
        <img className="profile" src={userObj.photoURL} alt="profileImage" />
        <form onSubmit = {onSubmit}>
            <div >
            <input
                className="nweetInputBox"
                value={nweet}
                onChange={onChange} 
                type="text" 
                placeholder="What's on your mind?" 
                maxLength={100}
                required
            />

            <input
                className="nweetSubmit"
                type="submit" 
                value="Nweet" />
            </div>

            <div className="attachImage">
                <label for="image">
                    <FaCamera size={25} />
                </label>
                <input
                    id="image" 
                    type="file" 
                    accept="image/*" 
                    onChange={onFileChange} 
                    />
            </div>


            {attachment && ( 
                <div>
                    <img 
                        src={attachment} 
                        alt="attachedImage" 
                        width="50px" 
                        height="50px" />
                    <button 
                        onClick={onClearAttachment}>
                        Clear
                    </button>
                </div>
                )}
        </form>
        </Container>
    )
}

export default NweetFactory;