import React from 'react'
import { category } from '../data/categories'
import '../assets/css/Category.css'

const Category = () => {
  return (
    <div className="container">
      <h3>Category</h3>
      <div className="cate-items">
        {category.map((item) => (
          <button className="cate-box d-flex flex-column" key={item.id}>
            <p className='m-0'>{item.name}</p>
            <img src={item.image} alt={item.name} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Category
