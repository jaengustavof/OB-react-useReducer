import React, { useState } from 'react';

const LoginUseState = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await function login(userName, password) {
 
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if(userName === 'admin' & password === 'admin') {
                            resolve();
                        }else {
                            reject();
                        }
                    },2000)
                })
            }

            setisLoggedIn(true);
            setLoading(false);

        } catch (error) {

            setError(`Invalid Username or Password: ${error}`);
            setLoading(false);
            setUserName('');
            setPassword('');

        }
    }

    const logOut = () => {
        setisLoggedIn(false);
        setLoading(false);
    }

    return (
        <div className='App'>
            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <h1>Welcome {userName}</h1>
                            <button onClick={logOut}>Log Out</button>
                        </div>
                    ) :
                    (
                        <form onSubmit={submit}>

                            {
                                error && <p style={{color: 'tomato'}}>{error}</p>
                            }

                            <input 
                                type='text' 
                                placeholder='Username' 
                                value={userName} 
                                onChange = {(e) => setUserName(e.currentTarget.value)} 
                            />

                            <input 
                                type='text' 
                                placeholder='password' 
                                value={password} 
                                onChange = {(e) => setPassword(e.currentTarget.value)} 
                            />

                            <button type='submit'>
                                {isLoading ? 'Loading...': 'Login'}
                            </button>

                        </form>
                    )
                }
            </div>
        </div>
    );
}

export default LoginUseState;
