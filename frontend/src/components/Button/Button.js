import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router'
const Button = ({name}) => {
    const logout = () => {
        axios.post("http://localhost:8000/api/users/logout", {}, {
            withCredentials: true
        })
        .then ( res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err)
        })
        navigate("/");
    }
    return (
        <button
        className="button"
        onClick={logout}>{name}</button>
    )
}

export default Button
