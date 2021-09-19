import React, { useState } from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";
import { updateProfile } from "@firebase/auth";
import { storageService } from "fbase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
`;

const Profile = ({ refreshUser, userObj }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const [newProfile, setNewProfile] = useState(userObj.photoURL);
    
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    }
    const onChange = (event) => {
        const { target : { value }} = event;
        setNewDisplayName(value);

    }
    const onSubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName) {
            await updateProfile(
                userObj, {
                displayName: newDisplayName}
                );
                refreshUser();
        }
    }
    
    const onProfileChange = (event) => {
        const { target : {files} } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setNewProfile(result);    
        }
        reader.readAsDataURL(theFile);
        
    }

    const onProfileSubmit = async (event) => {
        event.preventDefault();
        console.log(newProfile);

        const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
        const response = await uploadString(attachmentRef, newProfile, "data_url");
        let attachmentUrl = await getDownloadURL(response.ref);

        if(userObj.photoURL !== attachmentUrl) {            
            await updateProfile(
                userObj, {
                    photoURL: attachmentUrl
                }
            );
            refreshUser();
            
        }

    }

    return (
    <Container>
        <h1> Hello {userObj.displayName} </h1>
        <img src={userObj.photoURL} 
             alt="profilePicture" 
             width="70px"
             height="70px"
             />
        <form onSubmit={onSubmit}>
            <input 
                onChange={onChange}
                type="text"
                placeholder="Display Name"
                value={newDisplayName}
            />
            <input type="submit" value="Update Name" />
        </form>
        
        <form onSubmit={onProfileSubmit}>
            <input onChange={onProfileChange} type="file" accept="image/*" />
            <input type="submit" value="Update Profile" />
            {newProfile ==="" ? 
                                <img src="https://nomadcoders.co/m.svg" alt="altImage"/>
                              :
                                <img src={newProfile} 
                                     width="50px"
                                     height="50px"
                                     alt="profileImage"/> 
                                     }
        </form>
        
        <button onClick={onLogOutClick}> Sign Out </button>
    </Container>
    )
};



export default Profile;