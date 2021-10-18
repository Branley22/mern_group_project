import React, {useState} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const register = event => {
        event.preventDefault();

        const newUser = { username, email, password, confirmPassword};

        axios.post("http://localhost:8000/api/users/register", newUser , {
            withCredentials: true
        })
        .then( (res) => {
            console.log(res);
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/home");
        })
        .catch( err => {
            setErrors(err);
        });

    };
    return (
        <div className="login">
            <h3>Register</h3>
            <form className="form" onSubmit={register}>
                {
                    errors.username ?
                    <span className="errors">{errors.username.message}</span> : null
                }
                <div className="form_wrapper">
                    <label className="label">Username: </label>
                    <input
                        className="input"
                        type="text"
                        name="username"
                        value={username}
                        onChange={ (e) => setUsername(e.target.value)}/>
                </div>
                {
                    errors.email ?
                    <span className="errors">{errors.email.message}</span> : null
                }
                <div className="form_wrapper">
                    <label className="label">Email: </label>
                    <input
                        className="input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                {
                    errors.password ?
                    <span className="errors">{errors.password.message}</span> : null
                }
                <div className="form_wrapper">
                    <label className="label">Password: </label>
                    <input
                        className="input"
                        type="password"
                        name="password"
                        value={password} onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                {
                    errors.confirmPassword ?
                    <span className="errors">{errors.confirmPassword.message}</span> : null
                }
                <div className="form_wrapper">
                    <label className="label">Confirm Password: </label>
                    <input
                        className="input"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
                </div>

                <input className="btn margin-top-sm" type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Register
