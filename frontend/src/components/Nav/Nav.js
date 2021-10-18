import React from 'react'
import { Link } from '@reach/router'
import Button from '../Button/Button'
import {navigate} from '@reach/router'
const Nav = () => {

    const onClick = () => {
        navigate("/home")
    }

    return (
        <nav className="navbar">
            <p onClick={onClick} className="navbar_logo">sweet <span>movies</span></p>
            <ul className="navbar_list">
                <li className="navbar_item navbar_movies">
                    <Link
                    className="navbar_link"
                    to="./">Movies</Link>
                </li>
                <li className="navbar_item navbar_create">
                    <Link
                    className="navbar_link"
                    to="./create">Create</Link>
                </li>
                <li className="navbar_item navbar_profile">
                    <Link
                    className="navbar_link"
                    to="./profile">Profile</Link>
                </li>
            </ul>
            <Button name="Logout"/>
        </nav>
    )
}

export default Nav
