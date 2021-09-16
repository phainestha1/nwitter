import React, { useState } from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";
// import { collection, getDocs, query, where } from "firebase/firestore";
import { updateProfile } from "@firebase/auth";

const Profile = ({ refreshUser, userObj }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
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
    return (
    <>
    <form onSubmit={onSubmit}>
        <input 
            onChange={onChange}
            type="text"
            placeholder="Display Name"
            value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
    </form>
        <h1> Hello {userObj.displayName} </h1>
        <button onClick={onLogOutClick}> Sign Out </button>
    </>
    )
};



export default Profile;