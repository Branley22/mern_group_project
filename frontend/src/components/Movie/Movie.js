import React, {useState, useEffect} from 'react'
import axios from 'axios'
import avenger from '../../img/avengers.jpg'
import {navigate, Link, Router} from '@reach/router'
import Delete from '../Delete/Delete'
import Edit from '../Edit/Edit'
const Movie = ({id, children}) => {
    const [ movie, setMovie ] = useState({});
    useEffect( () => {
        axios.get("http://localhost:8000/api/movies/" + id, {withCredentials:true})
        .then( (res) => {
            console.log(res.data)
            setMovie(res.data);
        })
        .catch( (err) => {
            console.log(err);
        } )
    }, [id])

    const returnHome =()=> {
        navigate("/home")
    }

    const toEdit =() => {
        navigate("/edit/" + id);
    }
    const afterDeleteHandler = () => {
        navigate('/home');
    }
    return (
        <div className="movie">
            <figure>
                <img className="movie_img" src={avenger} alt=""/>
                <span>Created By: {movie.createdByUserName}</span>
            </figure>
            <div className="movie_container">
                <h3 className="movie_title">{movie.title}</h3>
                <p className="movie_producer">Producer: {movie.producer}</p>
                <div className="movie_wrapper">
                    <p className="movie_rated margin-right-sm">Rated: {movie.rated}</p>
                    <p className="movie_genre margin-right-sm">Genre: {movie.genre}</p>
                    <p className="movie_length">Length: {movie.length} mins</p>
                </div>
                <p className="movie_summary">Summary: {movie.summary}</p>

                <div>
                <Link to={'./edit/'+movie._id}>
                <button
                className="button margin-right-sm movie_edit">Edit</button>
                </Link>
                <Delete id={id} afterDeleteHandler={afterDeleteHandler}/>
                <button onClick={returnHome} className="button return">Return</button>
                </div>
            </div>
        </div>
    )
}

export default Movie
