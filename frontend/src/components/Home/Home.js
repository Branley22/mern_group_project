import React from 'react'
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
const Home = ({children}) => {

    return (
        <div className="home">

            <div className="apes">
                <h1 className="sweet_movies">sweet</h1>
            </div>

            <div className="lion">
                <ul className="lion_list">
                    <li className="lion_item">
                        <Link
                        className="lion_link btn"
                        to="/login">Login</Link>
                    </li>
                    <li className="lion_item">
                        <Link
                        className="lion_link btn"
                        to="/register">Register</Link>
                    </li>
                </ul>
                {children}
            </div>

            <div className="dragon" >
            <h1 className="sweet_movies">movies</h1>
            </div>

        </div>
    )
}

export default Home;
