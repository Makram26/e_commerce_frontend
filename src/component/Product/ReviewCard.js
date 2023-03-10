import React from 'react'

import ReactStars from 'react-rating-stars-component'
import profileimage from "../../images/profile.png"
const ReviewCard = ({review}) => {


    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 25 : window.innerWidth < 1030 ? 25 : 15,
        value: Number(review.rating),
        isHalf: true
    }
  return (
    <div className='reviewCard'>
        <img src={profileimage} alt="User" />
        <p>{review.name}</p>
        <ReactStars {...options}/>
        <span>{review.comment}</span>
        
    </div>
  )
}

export default ReviewCard