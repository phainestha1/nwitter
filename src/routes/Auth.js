import { authService } from "fbase";
import { 
        GoogleAuthProvider,
        GithubAuthProvider,
        signInWithPopup
        } from "@firebase/auth";
import React, {useState} from "react";
import "style/auth.css";
import AuthForm from "components/AuthForm";

const Auth = () => {


    const onSocialClick = async (event) => {
        const {target: {name}} = event;
        
        const providerGoogle = new GoogleAuthProvider();
        const providerGithub = new GithubAuthProvider();

        if (name === "google") {
            signInWithPopup(authService, providerGoogle); 
        } else if (name === "github") {
            signInWithPopup(authService, providerGithub); 
        };
        // const data = await authService.signInWithPopup(provider);
    };

    return (
    <div className="signInSection">
        <AuthForm />
        <div className="altLogin">
            <button
                id="googleButton" 
                onClick={onSocialClick} 
                name="google"> 
            Continue with Google 
            </button>
            <button 
                id="githubButton"
                onClick={onSocialClick} 
                name="github"> 
            Continue with GitHub 
            </button>
        </div>
    </div>
    )
};

export default Auth;