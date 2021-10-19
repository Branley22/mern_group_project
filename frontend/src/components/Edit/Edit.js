import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate} from '@reach/router'
import Form from '../Form/Form';

const Edit = ({id}) => {
    const [ errors, setErrors ] = useState({});
    const [ movie, setMovie ] = useState({})


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
                if(res.data.errors){
                    setErrors(res.data.errors)
                } else{
                    navigate('./movie/'+ id)
                }
            })
            .catch( (err) => {
                console.log(err);
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
