import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { navigate } from '@reach/router';
import avenger from '../../img/avengers.jpg'
const Delete = ({id, afterDeleteHandler}) => {

    const [ movie, setMovie ]= useState({});

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

    const deleteHandler = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/movies/"+id, {withCredentials:true})
        .then( (res) => {
            console.log(res.data)
            navigate(`/home`)
            // afterDeleteHandler(id);
        })
        .catch( (err) => {
            console.log(err)
            navigate("/home");
        })
    }
    return (
        <div className="edit">
            <p className="choose">Are you sure you wish to delete <span id="delete" >${movie.title}</span></p>
            <button
            onClick={ (e) => deleteHandler(e, id) }
            className="button delete margin-right-sm">Delete
            </button>
        </div>
    )
}

export default Delete
