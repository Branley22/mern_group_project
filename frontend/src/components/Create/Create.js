import React, {useState} from 'react'
import Form from '../Form/Form'
import axios from 'axios'
import {navigate} from '@reach/router';
const Create = () => {
    const [ errors, setErrors ] = useState({});
    const [ movie, setMovie ] = useState({
        title: '',
        rated: '',
        genre: '',
        length: '',
        img: '',
        producer: '',
        summary: '',
        user_id: {},
        createdByUserName: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/movies", movie, {withCredentials:true})
        .then( (res) => {
            if(res.data.errors){
                setErrors(res.data.errors)
            }
            else {
                navigate("/home")
            }
        })
        .catch( (err) => {
            console.log(err.response.status);
            if(err.response.status === 401){
                navigate("/home");
            }
        })
    }

    return (
        <div className="create">
            <Form
                movie={movie}
                setMovie={setMovie}
                errors={errors}
                handleSubmit={handleSubmit}
                submitButton={'Create Movie'}
            />
        </div>
    )
}

export default Create
