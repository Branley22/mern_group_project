import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link,navigate } from '@reach/router'
import starwar from '../../img/starwar.jpg'
import Delete from '../Delete/Delete'
import {Router} from '@reach/router'
import Edit from '../Edit/Edit'

const Profile = ({id, children}) => {

    const [ movieByUser, setMovieByUser ] = useState([]);
    const [ user, setUser ] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/user/${id}`, {withCredentials: true})
        .then((res)=>{
            console.log(res.data);
            setMovieByUser(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [id])
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/users/${id}`, {withCredentials: true})
        .then((res)=>{
            console.log(res.data);
            setUser(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [id])

    const returnHome =()=> {
        navigate("/home")
    }

    return (

        <>
            <p className="user">Welcome back<span id="user">{user.username}</span></p>
            {
                movieByUser.map( (movie, index) => (
                    <div key={index} className="movie userMovies">
                        <figure>
                            <img className="movie_img" src={starwar} alt=""/>
                            <span>Created By: {movie.createdByUserName}</span>
                        </figure>
                        <div className="movie_container">
                            <h3 className="movie_title">{movie.title}</h3>
                            <p className="movie_producer">Producer: {movie.producer}</p>
                            <div className="movie_wrapper">
                                <p className="movie_rated margin-right-sm">Rated: ${movie.rated}</p>
                                <p className="movie_genre margin-right-sm">Genre: ${movie.genre}</p>
                                <p className="movie_length">Length: {movie.length} mins</p>
                            </div>
                            <p className="movie_summary">Summary: {movie.summary}</p>

                            <div>
                            <Link to={`/edit/${movie._id}`}>
                            <button
                            className="button margin-right-sm movie_edit">Edit</button>
                            </Link>
                            <Link to={`/delete/${movie._id}`}>
                            <button
                            className="button margin-right-sm delete">Delete</button>
                            </Link>
                            {/* <Delete id={id} afterDeleteHandler={afterDeleteHandler}/> */}
                            <button onClick={returnHome} className="button return">Return</button>
                            </div>
                        </div>
                    </div>
                ))
            }
                        <Router>
            <Edit path="edit/:id"/>
            </Router>
            {children}
            </>


    )
}

export default Profile
