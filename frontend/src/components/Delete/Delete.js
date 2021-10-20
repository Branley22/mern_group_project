import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { navigate } from '@reach/router';
const Delete = ({id, afterDeleteHandler}) => {


    const deleteHandler = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/movies/"+id, {withCredentials:true})
        .then( (res) => {
            console.log(res.data)
            afterDeleteHandler(id);
        })
        .catch( (err) => {
            console.log(err)
            navigate("/home");
        })
    }
    return (
        <button
        onClick={ (e) => deleteHandler(e, id) }
        className="button delete margin-right-sm">Delete</button>
    )
}

export default Delete
