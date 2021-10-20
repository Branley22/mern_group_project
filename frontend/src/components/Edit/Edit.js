import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate, Redirect} from '@reach/router'
import Form from '../Form/Form';
const Edit = ({id}) => {
    const [ errors, setErrors ] = useState({});
    const [ movie, setMovie ] = useState({
        title: "",
        producer: "",
        length: "",
        genre: "",
        rated: "",
        summary: ""

    })

    useEffect( () => {
        axios.get(`http://localhost:8000/api/movies/${id}`,{withCredentials:true})
            .then( (res) => {
                console.log(res.data)
                setMovie(res.data);
            })
            .catch( (err) => {
                console.log(err);
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/movies/' + id, movie, {withCredentials:true})
            .then( (res) => {
                console.log(res.data);
                if(res.data.errors){
                    setErrors(res.data.errors)
                } else{
                    navigate('/home')
                }
            })
            .catch( (err) => {
                console.log(err);
            })
    }


    return (
        <div className="edit">
            <p className="choose">You are editing: <span id="title">{movie.title}</span></p>
        <Form
            return={"return"}
            form={"Edit Form"}
            movie={movie}
            setMovie={setMovie}
            errors={errors}
            handleSubmit={handleSubmit}
            submitButton={"Edit"}
            />
        </div>
    )
}

export default Edit
