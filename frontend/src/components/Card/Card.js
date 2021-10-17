import React from 'react'

const Card = ({title}) => {
    return (
        <div className="card">
        <figure className="card_figure">
            <img className="card_img" src="" alt="" />
        </figure>
        <h3 className="card_title">{title}</h3>
    </div>
    )
}

export default Card
