import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
const Profile = ({id}) => {

    const [ movieByUser, setMovieByUser ] = useState([]);
    const [ user, setUser ] = useState({})

    useEffect( () => {
        axios.get('http://localhost:8000/api/movies/user/' + id, {withCredentials:true})
        .then( (res) => {
            console.log(res.data)
            setMovieByUser(res.data);
        })
        .catch( (err) => {
            console.log(err)
        })
    },[id])

    useEffect( () => {
        axios.get('http://localhost:8000/api/users/'+id, {withCredentials:true})
        .then( (res) => {
            console.log(res.data);
            setUser(res.data);
        })
        .catch( (err) => {
            console.log(err);
        })
    },[id])

    return (
        <div className="profile">
            <h2>Welcome back {user.username}</h2>
        </div>
    )
}

export default Profile
