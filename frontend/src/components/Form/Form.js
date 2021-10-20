
const Form = ({movie, setMovie, errors, handleSubmit, submitButton, form}) => {

    const genres = [
        "Action",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Historical",
        "Experimental",
        "Horror",
        "Romance",
        "Science Fiction",
        "Thriller",
        "Western",
        "Other"
    ]

    const rated = [
        "G",
        "PG",
        "PG-13",
        "R",
        "NC-17"
    ]

    const inputChange = (e) => {
        console.log('input name: ' + e.target.name)
        console.log('input value:' + e.target.value)
        let newMovieObject = { ...movie};

        newMovieObject[e.target.name] = e.target.value;

        setMovie(newMovieObject);
        console.log("success");
    }
    return (
        <div className="login">
            <h1>{form}</h1>
            <form  className="form" onSubmit={ (e) => handleSubmit(e)}>
                <div className="form_wrapper">
                {
                        errors.image ?
                        <p className="errors">{errors.image.message}</p>
                        : null
                    }
                    <label className="label">Image</label>
                    <input
                        className="input"
                        type='file'
                        name='image'
                        onChange={ (e) => inputChange(e)} />
                </div>
                <div className="form_wrapper">
                {
                        errors.title ?
                        <p className="errors">{errors.title.message}</p>
                        : null
                    }
                    <label className="label">Title: </label>
                    <input
                        className="input"
                        type='text'
                        name='title'
                        value={movie.title}
                        onChange={ (e) => inputChange(e)} />
                </div>

                <div className="form_wrapper">
                {
                        errors.producer ?
                        <p className="errors">{errors.producer.message}</p>
                        : null
                    }
                    <label className="label">Producer: </label>
                    <input
                        className="input"
                        type='text'
                        name='producer'
                        value={movie.producer}
                        onChange={ (e) => inputChange(e)} />
                </div>

                <div className="form_wrapper">
                {
                        errors.length ?
                        <p className="errors">{errors.length.message}</p>
                        : null
                    }
                    <label className="label">Movie Length (minutes): </label>
                    <input
                        className="input"
                        type='number'
                        min='30'
                        name='length'
                        value={movie.length}
                        onChange={ (e) => inputChange(e)} />
                </div>


                <div className="test">

                <div className="form_wrapper genre">
                {
                        errors.genre ?
                        <p className="errors">{errors.genre.message}</p>
                        : null
                    }
                    <label className="label">Genre: </label>
                    <select
                        className="input"
                        name='genre'
                        value={movie.genre}
                        onChange={ (e) => inputChange(e)}>
                            <option value=""></option>
                            {
                                genres.map( (movieGenre) => (
                                    <option key={movieGenre}>{movieGenre}</option>
                                ))
                            }
                    </select>
                </div>


                <div className="form_wrapper rating">
                    <label className="label">Rating: </label>
                    <select
                        className="input"
                        name='rated'
                        value={movie.rated}
                        onChange={ (e) => inputChange(e)}>
                            <option value=""></option>
                            {
                                rated.map( (r) => (
                                    <option  key={r}>{r}</option>
                                ))
                            }
                    </select>
                </div>

                </div>

                <div className="form_wrapper">
                {
                        errors.summary ?
                        <p className="errors">{errors.summary.message}</p>
                        : null
                    }
                    <label className="label">Summary</label>
                    <input
                        className="input"
                        type='text'
                        name='summary'
                        value={movie.summary}
                        onChange={ (e) => inputChange(e)} />
                </div>
                <button className="btn margin-top-sm" type='submit'>{submitButton}</button>
            </form>
        </div>
    )
}

export default Form
