import Card from '../Card/Card'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'
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
                    <div key={index}>
                        <Link to={'./movie/'+ movie._id}>{movie.title}</Link>
                        <img src={movie.image} alt="" />
                    </div>

                ))
            }
        </div>
    )
}

export default Movies
