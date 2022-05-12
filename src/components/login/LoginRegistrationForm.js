import { useContext, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";
import Layout from "../layout/Layout";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";

const LoginRegistrationForm = (props) => {
    const [logIn, setLogIn] = useState(true);
    const authCtx = useContext(AuthContext);
    const usernameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        let url;

        if (logIn) {
            // authCtx.onLogin();
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGNqF0gcuUsILuGg5XHEIY0i9AATqVBbY';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAGNqF0gcuUsILuGg5XHEIY0i9AATqVBbY';
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                // username: usernameInputRef.current.value,
                email: emailInputRef.current.value,
                password: passwordInputRef.current.value,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
                authCtx.onLogin();
                alert('Registered Successfully');
            } else {
                return res.json().then(data => {
                    if (data && data.error && data.error.message)
                        alert(data.error.message);
                });
            }
        });
    };

    return (
        <Layout>
            <Card className='w-3/4 m-auto'>
                <form className="flex flex-col" onSubmit={submitHandler}>
                    {!logIn &&
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type='text' id="username" ref={usernameInputRef} />
                        </div>}
                    <div>
                        <label htmlFor="emailInput">Email</label>
                        <input type='email' id="emailInput" ref={emailInputRef} />
                    </div>
                    <div>
                        <label htmlFor="passwordInput">Password</label>
                        <input type='password' id='passwordInput' ref={passwordInputRef} />
                    </div>
                    <Button>{logIn ? 'Log In' : 'Register'}</Button>
                    {logIn && <div className='cursor-pointer text-center' onClick={() => { setLogIn(false); }}>I do not have an account</div>}
                    {!logIn && <div className='cursor-pointer text-center' onClick={() => { setLogIn(true); }}>I have an account</div>}
                </form>
            </Card>
        </Layout>
    );
};

export default LoginRegistrationForm;