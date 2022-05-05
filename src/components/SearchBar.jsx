import React from 'react'
import "../styles/SearchBar.css"
function SearchBar() {
  return (
    <div className='search-bar__container'>
        {/* Cuadradito para introducir el texto */}
        <input type="text" value="Search..." />
        {/* Los siguientes van a la par input y label */}
        <input id='show-products' type="checkbox" />
        <label htmlFor="show-products">Only show products in stock</label>

    </div>
  )
}

export {SearchBar} 