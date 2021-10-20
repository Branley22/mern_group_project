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
            console.log(res.data)
                navigate("/home")

        })
        .catch( (err) => {
            console.log(err.response.data.errors);
            setErrors((err.response.data.errors));
        })
    }

    return (
        <div className="create">
            <Form
                form={"Movie Form"}
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
