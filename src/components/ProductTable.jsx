import React from 'react'
import{CategoryProduct} from "./CategoryProduct"
import "../styles/ProductTable.css"

function ProductTable() {
  return (
    <div className='product-table'>
        <div className='product-table-header'>
            <span>Name</span><span>Price</span>
        </div>
        <div className='product-table-categiories'>
            <CategoryProduct/>
            <CategoryProduct/>
        </div>
    </div>
  )
}

export {ProductTable}