
import {useEffect,useState} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import john from '../../img/john.jpg'

const Movies = ({id}) => {
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
                    <div className="card" key={index}>
                    <figure className="card_figure">
                        <img className="card_img" src={john} alt="" />
                    </figure>
                    <Link className="card_link card_title" key={index} to={'./movie/'+ movie._id}>{movie.title}
                    </Link>
                    <div className="movies_actions">
                    {/* <Link to={'./edit/'+ movie._id}>
                    <button
                    className="button margin-right-sm movie_edit">Edit</button>
                    </Link> */}
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Movies
