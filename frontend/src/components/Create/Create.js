import React from 'react'
import Form from '../Form/Form'
const Create = ({movie,setMovie,errors,handleSubmit}) => {
    return (
        <div>
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
