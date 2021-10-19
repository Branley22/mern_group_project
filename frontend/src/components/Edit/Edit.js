import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate} from '@reach/router'
import Form from '../Form/Form';

const Edit = ({id}) => {
    const [ errors, setErrors ] = useState({});
    const [ movie, setMovie ] = useState({
        title: '',
        rated: '',
        genre: '',
        length: '',
        img: '',
        producer: '',
        summary: '',
        user_id: '',
        createdByUserName: ''
    })


    useEffect( () => {
        axios.get('http://localhost:8000/api/movies/' + id, {withCredentials:true})
            .then( res => {
                console.log(res.data)
                setMovie(res.data)
            })
            .catch( err => {
                console.log(err)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/movies/' + id , movie)
            .then( (res) => {
                console.log(res.data);
                setMovie({
                    title: '',
                    rated: '',
                    genre: '',
                    length: '',
                    img: '',
                    producer: '',
                    summary: '',
                    user_id: '',
                    createdByUserName: ''
                })
                    navigate('/home')
            })
            .catch( (err) => {
                console.log(err.response.data.errors);
            })
    }
    return (
        <div className="edit">
            <Form
                movie={movie}
                setMovie={setMovie}
                errors={errors}
                handleSubmit={handleSubmit}
                submitButton={'Edit Movie'}
            />
        </div>
    )
}

export default Edit
