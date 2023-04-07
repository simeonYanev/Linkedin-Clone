import React, { useState } from 'react';
import "./Login.css";
import { auth } from "./firebase"
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoUrl,
            })
            );
        }).catch((error) => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert("Please enter your full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(
                (userAuth) => {
                    userAuth.user.updateProfile({
                        displayName: name,
                        photoURL: picture,
                    })
                        .then(() => {
                            dispatch(
                                login({
                                    email: userAuth.user.email,
                                    uid: userAuth.user.uid,
                                    displayName: name,
                                    photoURL: picture
                                }));
                        });
                }).catch((error) => alert(error.message));
    };

    return (
        <div className='login'>

            <img src='https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png' alt='' />

            <form>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Full Name (required if registering)'
                    type='text'
                />

                <input
                    placeholder='Profile picture URL (optional)'
                    value={picture}
                    onChange={e => setPicture(e.target.value)}
                    type='text'
                />

                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                    type='email'
                />

                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                    type='password'
                />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login;