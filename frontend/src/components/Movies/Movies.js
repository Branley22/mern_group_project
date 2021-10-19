
import {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'
import john from '../../img/john.jpg'
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
                            <h3 className="card_title">{movie.title}</h3>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Movies
