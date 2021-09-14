import { authService } from "fbase";
import { 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword, 
    signInWithPopup
        } from "@firebase/auth";
import React, {useState} from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value)
        }
    }

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

    const toggleAccount = () => {
        setNewAccount(prev => !prev);
    };
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
    <div>
        <form onSubmit={onSubmit}>
            <input 
                name="email" 
                type="text" 
                placeholder="Email" 
                required 
                value={email}
                onChange={onChange}
                />
            <input 
                name="password" 
                type="password" 
                placeholder="password" 
                required 
                value={password}
                onChange={onChange}
                />
            <input type="submit" value={newAccount ? "Create Account" : "Sign In"} />
            {error}
        </form>
        <span onClick={toggleAccount}> {newAccount ? "Sign In" : "Create Account"} </span>
        <div>
            <button onClick={onSocialClick} name="google"> Continue with Google </button>
            <button onClick={onSocialClick} name="github"> Continue with GitHub </button>
        </div>
    </div>
    )
};

export default Auth;