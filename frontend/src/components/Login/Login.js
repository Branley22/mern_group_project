import React, {useState} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Login = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errors, setErrors ] = useState("");


    const login = event => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/users/login", { email, password }, {
            withCredentials: true
        })
        .then( response => {
            if(response.data.errors){
                console.log(response.data.errors)
                setErrors(response.data.errors)
            }
            else{
                navigate("/home")
            }
        })
        .catch( err => {
            console.log(err.response.status);
            if(err.response.status === 400){
                navigate("/login");
            }
        });

    };


    return (
        <div className="login">
            <h3>Login</h3>
            <form className="form" onSubmit={login}>
                {
                    errors.email ?
                    <span className="errors">{errors.email.message}</span>
                    : null
                }
                <div className="form_wrapper">
                    <label className="label">Email: </label>
                    <input
                        className="input"
                        type="text"
                        name="email"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div className="form_wrapper">
                    <label className="label">Password: </label>
                    <input
                        className="input"
                        type="password"
                        name="password"
                        value={password} onChange={ (e) => setPassword(e.target.value)}/>
                </div>

                <input className="btn margin-top-sm" type="submit" value="Login"/>
            </form>

        </div>
    )
}

export default Login
