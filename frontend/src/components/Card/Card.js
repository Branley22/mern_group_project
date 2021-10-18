import {useEffect,useState} from 'react'
import axios from 'axios'
const Card = ({title}) => {

    const [ movie, setMovie ] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/movies/" + movie._id, {withCredentials:true})
        .then( (res) => {
            console.log(res.data)
            setMovie(res.data)
        })
    }, [movie._id]);

    const onClick = () => {

    }

    return (
        <div className="card">
        <figure className="card_figure">
            <img className="card_img" src={movie.image} alt="" />
        </figure>
        <h3 className="card_title">{title}</h3>
    </div>
    )
}

export default Card
