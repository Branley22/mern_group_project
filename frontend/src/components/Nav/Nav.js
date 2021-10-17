import React from 'react'
import { Link } from '@reach/router'
const Nav = () => {
    return (
        <nav className="navbar">
            <img className="navbar_img" src="" alt="Sweet Movies" />
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
                <li className="navbar_item navbar_logout">
                    <Link
                    className="navbar_link"
                    to="./logout">Logout</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Nav
