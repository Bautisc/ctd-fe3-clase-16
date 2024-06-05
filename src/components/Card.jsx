import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    return (
        <div className='card'>
            <Link to={"/beer/" + data.id}>
                <h3>{data.name}</h3>
                <p>{data.price}</p>
                <img src={data.image} alt="beer-detail" />
            </Link>
        </div>
    )
}

export default Card
