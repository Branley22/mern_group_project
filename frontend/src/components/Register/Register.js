import React, {useState} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const Register = () => {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ errors, setErrors ] = useState("");


    const register = event => {
        event.preventDefault();
        axios.post("", {
            email: email,
            password: password,
        }, {
            withCredentials: true
        })
        .then((res) => {
            console.log(res.cookie);
            console.log(res);
            console.log(res.data);
            navigate("/movies");
        })
        .catch( err => {
            setErrors(err.res.data.message);
        });

    };
    return (
        <div className="login">
            <h3>Login</h3>
            <form className="form" onSubmit={register}>
            <div className="form_wrapper">
                    <label className="label">Username: </label>
                    <input
                        className="input"
                        type="text"
                        name="username"
                        value={username}
                        onChange={ (e) => setEmail(e.target.value)}/>
                </div>
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
                        type="text"
                        name="password"
                        value={password} onChange={ (e) => setPassword(e.target.value)}/>
                </div>

                <div className="form_wrapper">
                    <label className="label">Confirm Password: </label>
                    <input
                        className="input"
                        type="text"
                        name="confirmPassword"
                        value={confirmPassword} onChange={ (e) => setPassword(e.target.value)}/>
                </div>

                <input className="btn margin-top-sm" type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Register
