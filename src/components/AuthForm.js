import React, {useState} from "react";
import { authService } from "fbase";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    } from "@firebase/auth";

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
        <div className="signInSection">
        <h3 id="welcomeMessage">Nweet Your Mind!</h3>
        <a href="https://nomadcoders.co/community/thread/1115">
        <img 
            id="logoImage"
            src="https://nomadcoders.co/m.svg"
            alt="nomadlogo" />
        </a>
        <form className="signInForm" onSubmit={onSubmit}>
            <input 
                id="emailForm"
                name="email" 
                type="text" 
                placeholder="Email" 
                required 
                value={email}
                onChange={onChange}
                />
            <input
                id="passwordForm"
                name="password" 
                type="password" 
                placeholder="Password" 
                required 
                value={password}
                onChange={onChange}
                />
            <input 
                id="signInButton"
                type="submit" 
                value={newAccount ? "Create Account" : "Sign In"} />
            {error}
        </form>

        <span className="changeMessage" onClick={toggleAccount}> 
            {newAccount ? "Sign In" : "Create Account"} 
        </span>

        <span id="altMessage">Have Other Accounts?</span>
        </div>

    )

}

export default AuthForm;