import React from 'react'

import { Link } from 'react-router-dom'

import ReactStars from "react-rating-stars-component"

// const options ={
//     edit:false,
//     color:"rgba(20,20,20,0.1)",
//     activeColor:"tomato",
//     size:window.innerWidth < 600 ? 15 : window.innerWidth < 1030 ? 25 : 15,
//     value:2.5,
//     isHalf:true
// }



function Product({product}) {
 

  const options ={
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size:window.innerWidth < 600 ? 15 : window.innerWidth < 1030 ? 25 : 15,
    value:Number(product.rating),
    isHalf:true
}
  return (
     <Link className='productCard' to={`product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
            <ReactStars {...options}/><span>({product.numOfReviews} Reviews)</span>
        </div>
        <span>${product.price}</span>
      
     </Link>
  )
}

export default Product