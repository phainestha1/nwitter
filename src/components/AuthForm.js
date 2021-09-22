import React, {useState} from "react";
import { authService } from "fbase";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    } from "@firebase/auth";
import { 
        GoogleAuthProvider,
        GithubAuthProvider,
        FacebookAuthProvider, 
        signInWithPopup
        } from "@firebase/auth";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";




const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const toggleAccount = () => {
        setNewAccount(prev => !prev);
    };
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSocialClick = async (event) => {
        const {target: {name}} = event;
        
        const providerGoogle = new GoogleAuthProvider();
        const providerGithub = new GithubAuthProvider();
        const providerFacebook = new FacebookAuthProvider();

        if (name === "google") {
            signInWithPopup(authService, providerGoogle); 
        } else if (name === "github") {
            signInWithPopup(authService, providerGithub); 
        } else if (name === "facebook") {
            signInWithPopup(authService, providerFacebook); 
        };
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        try { 
            let data;
            if(newAccount) {
                // Create Account 
                data = await createUserWithEmailAndPassword(
                    authService, email, password
                    );
            } else {
                // Log In
                data = await signInWithEmailAndPassword(
                    authService, email, password
                    );
            }
            console.log(data);
         } catch(error) {
             setError(error.message);
         } 
    };

    return (
        <Container>
        <AuthSection>
        <h3>Nweet Your Mind</h3>

        <a href="https://nomadcoders.co/community/thread/1115">
        <img
            className="logo" 
            src="https://nomadcoders.co/m.svg"
            alt="nomadlogo" />
        </a>
        
        <form onSubmit={onSubmit}>
            <input 
                className="infoInput"
                name="email" 
                type="text" 
                placeholder="Email" 
                required 
                value={email}
                onChange={onChange}
                />
            <input
                className="infoInput"
                name="password" 
                type="password" 
                placeholder="Password" 
                required 
                value={password}
                onChange={onChange}
                />
            <input
                className="altSignInButton" 
                type="submit" 
                value={newAccount ? "Create Account" : "Sign In"} />
            {error}
        </form>
       

        <span onClick={toggleAccount}> 
            {newAccount ? "Sign In" : "Create Account"} 
        </span>

        <br /> <br />

        <span className="altMessage">Have Other Accounts?</span>
        
        <div>
            <button
                className="altSignInButton"
                onClick={onSocialClick} 
                name="google"> 
            Continue with &nbsp; <FcGoogle />
            </button>
            <button
                className="altSignInButton" 
                onClick={onSocialClick} 
                name="github"> 
            Continue with &nbsp; <SiGithub />
            </button>
            <button
                className="altSignInButton" 
                onClick={onSocialClick} 
                name="facebook"> 
            Continue with &nbsp; <FaFacebook />
            </button>
        </div>
        </AuthSection>
        </Container>
    )
}

export default AuthForm;


const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background : linear-gradient(
        to right, 
        rgba(20, 20, 20, 0.3) 30%, 
        rgba(20, 20, 20, 0.7) 50%,
        rgba(20, 20, 20, 1)
    ),
    url("https://source.unsplash.com/random/1920x1080");
    background-size: cover;
`;
const AuthSection = styled.div`
    color: honeydew;
    border: 3px solid honeydew;
    border-radius: 8px;
    text-align: center;
    width: 370px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 10px 50px 10px;
    
    .infoInput {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-top: 8px;
        margin-bottom: 8px;
        background-color: transparent;
        border: 2px solid honeydew;
        border-radius: 4px;
        color: honeydew;
        text-align: center;
        width: 70%;
        height: 35px;
    }
    .infoInput::placeholder {
        color: honeydew;
        text-align: center;
    }
    .infoInput:focus::placeholder {
        color: transparent;
    }

    .altSignInButton, .signInButton {
        background-color: transparent;
        color: honeydew;
        border: 2px solid honeydew;
        border-radius: 20px;
        color: honeydew;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 50%;
        height: 30px;
        cursor: pointer;
        margin-top: 8px;
        transition: 0.25s;
    }
    .altSignInButton:hover {
        background-color: honeydew;
        color: black;
    }

    .logo {
        width: 55px;
        height: 50px;
    }

`;