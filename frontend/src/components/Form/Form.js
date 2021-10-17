
import {navigate} from '@reach/router'
const Form = ({movie, setMovie, errors, handleSubmit, submitButton}) => {

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

    const ratings = [
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
    }
    return (
        <div>
            <h1>Movie Form</h1>
            <form onSubmit={ (e) => handleSubmit(e)}>
                <div>
                    <label>Title: </label>
                    {
                        errors.title ?
                        <p style={{color: 'red'}}>{errors.title.message}</p>
                        : null
                    }
                    <input
                        type='text'
                        name='title'
                        value={movie.title}
                        onChange={ (e) => inputChange(e)} />
                </div>
                <div>
                    <label>Genre: </label>
                    {
                        errors.genre ?
                        <p style={{color: 'red'}}>{errors.genre.message}</p>
                        : null
                    }
                    <select
                        name='genre'
                        value={movie.genre}
                        onChange={ (e) => inputChange(e)}>
                            <option value=""></option>
                            {
                                genres.map( (movieGenre) => (
                                    <option value={movieGenre} key={movieGenre}>{movieGenre}</option>
                                ))
                            }
                    </select>
                </div>
                <div>
                    <label>Producer: </label>
                    {
                        errors.producer ?
                        <p style={{color: 'red'}}>{errors.producer.message}</p>
                        : null
                    }
                    <input
                        type='text'
                        name='producer'
                        value={movie.producer}
                        onChange={ (e) => inputChange(e)} />
                </div>
                <div>
                    <label>Movie Length (minutes): </label>
                    {
                        errors.length ?
                        <p style={{color: 'red'}}>{errors.length.message}</p>
                        : null
                    }
                    <input
                        type='number'
                        min='30'
                        name='length'
                        value={movie.length}
                        onChange={ (e) => inputChange(e)} />
                </div>
                <div>
                    <label>Rating: </label>
                    {
                        errors.rating ?
                        <p style={{color: 'red'}}>{errors.rating.message}</p>
                        : null
                    }
                    <select
                        name='rating'
                        value={movie.rating}
                        onChange={ (e) => inputChange(e)}>
                            <option value=""></option>
                            {
                                ratings.map( (movieRating) => (
                                    <option value={movieRating} key={movieRating}>{movieRating}</option>
                                ))
                            }
                    </select>
                </div>
                <button type='submit'>{submitButton}</button>
            </form>
        </div>
    )
}

export default Form
