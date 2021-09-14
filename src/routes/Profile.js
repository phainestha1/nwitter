import React from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";

const Profile = () => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    }
    return <>
        <h1> Hello UserName </h1>
        <button onClick={onLogOutClick}> Sign Out </button>
    </>
};



export default Profile;