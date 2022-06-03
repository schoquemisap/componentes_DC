import React from 'react'

import '../styles/ProductRowS.css'

function ProductRowS(props) {
    const name = props.name
    const air_date = props.air_date
    const episode = props.episode
    
    return (
        <div className='product-row'>
            <span>{episode}</span>
            <span>{name}</span>
            <span>{`${air_date}`} </span>
            
        </div>
    )
}

export { ProductRowS }