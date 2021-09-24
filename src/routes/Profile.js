import React, { useState } from "react";
import { updateProfile } from "@firebase/auth";
import { storageService } from "fbase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const Profile = ({ refreshUser, userObj, nweets }) => {
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const [newProfile, setNewProfile] = useState(userObj.photoURL);
    const { metadata : { creationTime, lastSignInTime}} = userObj;
    
    const creation = new Date(creationTime);
    const last = new Date(lastSignInTime);
        
    const joinYear = creation.getFullYear();
    const joinMonth = creation.getMonth() + 1;
    const joinDate = creation.getDate();
    const creationDate = `${joinYear}년 ${joinMonth}월 ${joinDate}일`;
    const lastYear = last.getFullYear();
    const lastMonth = last.getMonth();
    const lastDate = last.getDate();
    const lastLogin = `${lastYear}년 ${lastMonth}월 ${lastDate}일`;

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
        
        reader.onloadend = async (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
            const response = await uploadString(attachmentRef, result, "data_url");
            let attachmentUrl = await getDownloadURL(response.ref);
            
            setNewProfile(result);    
            if(userObj.photoURL !== attachmentUrl) {            
            await updateProfile(
                userObj, {
                        photoURL: attachmentUrl
                    }
                    );
                    refreshUser();           
                    attachmentUrl = "";
            }
        }
        reader.readAsDataURL(theFile);
    }


    return (
    <ProfilePage>
    <ProfileContainer>
        <LeftHeader>
            <CurrentProfileImage>
            {newProfile === null 
                            ? 
                            <img 
                                src="https://nomadcoders.co/m.svg" 
                                alt="altImage"/>
                            :
                            <img 
                                src={newProfile} 
                                alt="profileImage"/>
                                }
            </CurrentProfileImage>
        </LeftHeader>

        <RightHeader>
            <DisplayUserInfo>
                <h3> 
                    Logged in with {userObj.providerData[0].providerId === "password" 
                                     ? "Your Own ID"
                                     : userObj.providerData[0].providerId}
                </h3>
                <h4>
                    Creation Date: {creationDate}
                </h4>
                <h4>
                    Last Coming {lastLogin}
                </h4>
            </DisplayUserInfo>
            <EditSection>
            <ProfileChange>

                <div>
                    <label id="label" for="image"> <FaCamera size={20} /> </label>
                    <input
                        id="image" 
                        onChange={onProfileChange} 
                        type="file" 
                        accept="image/*" />
                </div>
                <AttachedImage className={`${newProfile ? "" : "hidden"}`}>
                    <div>
                        {newProfile && 
                            <img 
                                src={newProfile} 
                                width="50px"
                                height="50px"
                                alt="profileImage"/> 
                    }
                    </div>
                </AttachedImage>

            </ProfileChange>
            <EditName>
                <form onSubmit={onSubmit}>
                    <input 
                    onChange={onChange}
                    type="text"
                    placeholder="Display Name"
                    value={newDisplayName}
                />
                    <button type="submit"> <AiFillEdit size={22}/> </button>
                </form>
            </EditName>
            </EditSection>
        </RightHeader>
    </ProfileContainer>
    <NweetInfoContainer>
        <ContainerTop>
        <h1>My Nweet Container</h1>
        </ContainerTop>
    </NweetInfoContainer>
    </ProfilePage>
    )
};



export default Profile;

const ProfilePage = styled.div`
    width: 100%;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex: 1;
    margin-left: 40px;
    margin-top: 100px;
`;
const LeftHeader = styled.div`
    display: flex;
    /* background-color: steelblue; */
`;
const CurrentProfileImage = styled.div`

    >img {
        display: flex;
        border: 1px solid gray;
        border-radius: 999px;
        width: 130px;
        height: 130px;
    }    
`;
const RightHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;
const DisplayUserInfo = styled.div`
    display: flex;
    flex-direction: column;

    >h1 {
        color: transparent;
    }
    >h3{
        padding-top: 40px;
        padding-bottom: 5px;
        font-size: 15px;
        font-weight: 400;
        color: #3f3f3f
    }
    >h4{
        font-size: 15px;
        font-weight: 400;
        color: #3f3f3f
    }
`;
const EditSection = styled.div`
    display: flex;

    .hidden {
        display:none;
    }
`;
const ProfileChange = styled.div`
    display: flex;
    padding-top: 5px;

    #image {
        display: none;
        }
    #label {
        cursor: pointer;
        transition: 0.2s;
        :hover { color: gray; }
    }
`;
const AttachedImage = styled.div`

    >div{
    }
    >div>button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: 0.2s;
        :hover {
            opacity: 0.6;
        }
    }
    >div>img {
        display: none;
    }
`;
const EditName = styled.div`
    >form {
        flex-direction: column;
    }
    >form>input {
        display: flex;
        position: fixed;
        left: 440px;
        top: 133px;
        font-size: 30px;
        background-color: white;
        border: none;
        outline:none;
        /* display: none; */
    }
    >form>button {
        background-color: transparent;
        border: none;
        padding-top: 5px;
        transition: 0.2s;
        cursor: pointer;
        :hover {
            color: gray;
        }
    }
`;


const NweetInfoContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #d0c8cb;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
`;
const ContainerTop = styled.div`
    display: flex;
    justify-content: center;
`;