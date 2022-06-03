import React from 'react'
import { ProductRowS } from './ProductRowS'
import '../styles/CategoryProductRowS.css'

function CategoryProductRowS(props) {

    const title = props.title
    const list = props.list
    return (
        <div className='category-container'>
            <div className='category-title'>
                {title}
            </div>
            <div className='category-body'>
                {list.map((episodes) =>
                    <ProductRowS
                        name={episodes.name}
                        air_date={episodes.air_date}
                        key={episodes.name}
                        episode={episodes.episode}
                    />)}

            </div>
        </div>
    )
}

export { CategoryProductRowS }