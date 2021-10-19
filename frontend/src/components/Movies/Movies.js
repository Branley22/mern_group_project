
import {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'
import john from '../../img/john.jpg'
import Edit from '../Edit/Edit'
const Movies = () => {
    const [ movies , setMovies ] = useState([]);
    useEffect( () => {
        axios.get("http://localhost:8000/api/movies", {withCredentials:true})

        .then( (res) => {
            console.log(res.data);
            setMovies(res.data);
        })
        .catch( (err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className="movies">
            {
                movies.map( (movie, index) => (
                    <Link className="card_link" key={index} to={'./movie/'+ movie._id}>
                        <div className="card">
                            <figure className="card_figure">
                                <img className="card_img" src={john} alt="" />
                            </figure>
                            <div className="movies_actions">
                            <p className="card_title">{movie.title}</p>
                            <Link to={'./edit/'+ movie._id}>
                            <button
                            className="button margin-right-sm movie_edit">Edit</button>
                            </Link>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Movies
