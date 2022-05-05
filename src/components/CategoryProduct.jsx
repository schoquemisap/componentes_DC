import React from 'react'
import {ProductRow} from './ProductRow'
import "../styles/CategoryProduct.css"

function CategoryProduct() {
    const title = 'Electronics'
  return (
    <div className='category-container'>
        <div className='category-title'>
            {title}
        </div>
        <div className='category-body'>
            <ProductRow/>
            <ProductRow/>
            <ProductRow/>
        </div>
    </div>
  )
}

export {CategoryProduct}