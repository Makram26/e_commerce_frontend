import React, { Fragment, useEffect } from 'react'

import Carousel from "react-material-ui-carousel"
import ReactStars from 'react-rating-stars-component'


import { useSelector, useDispatch } from "react-redux"

import { useParams } from "react-router-dom"

import { clearErrors, getProductDetails } from '../../actions/productAction'

import ReviewCard from "./ReviewCard.js"
import { useAlert } from 'react-alert'

import "./ProductDetails.css"
import Loader from '../layout/Loader/Loader'
const ProductDetails = (match) => {

    const params = useParams()


    console.log("aslkdfjsa;kdlfjsal;kdfjklsa", params.id)


    const dispatch = useDispatch();
    const alert=useAlert()


   

    const { product, loading, error } = useSelector((state) => state.productDetails)
    console.log("<><><<<<<<<<<<<<<<<<<<<<<<<", product.ratings)

    const options = {
        edit: true,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 25 : window.innerWidth < 1030 ? 25 : 15,
        value: Number(product.ratings),
        isHalf: true
    }

    useEffect(() => {
    
        if(error){
         alert.error(error.response.data.message)
         dispatch(clearErrors())
        }
        dispatch(getProductDetails(params.id))
        console.log("id>>>>>>>>>>>>", params.id)
        // debugger;
    }, [dispatch, params.id,error,alert])

    return (
        <Fragment>
            {
                loading ? <Loader />
                    :
                    <Fragment>
                        <div className='ProductDetails'>
                            <div className='leftContianer'>
                                <Carousel>

                                    {product && product.images && product.images.map((item, i) => (

                                        <img
                                            className='CarouselImage'
                                            key={item.url}
                                            src={item.url}

                                            alt={`${i} Slide`}
                                        />
                                    ))

                                    }
                                </Carousel>

                            </div>
                            <div className='rightContianer' >
                                <div className='detailsBlock-1'>
                                    <h2>{product.name}</h2>
                                    <p>Product # {product._id}</p>
                                </div>

                                <div className='detailsBlock-2'>
                                    <ReactStars {...options} />
                                    <span>({product.numOfReviews} Reviews)</span>
                                </div>

                                <div className='detailsBlock-3'>

                                    <h1>${product.price}</h1>
                                    <div className='detailsBlock-3-1'>
                                        <div className='detailsBlock-3-1-1'>
                                            <button>-</button>
                                            <input type="number" value="1" min="0" max="0" />
                                            <button>+</button>
                                        </div>
                                        <button>Add to Cart</button>
                                    </div>

                                    <p>
                                        Status :{" "}
                                        <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                            {product.Stock < 1 ? "OutOfStock" : "InStock"}
                                        </b>
                                    </p>

                                </div>



                                <div className='detailsBlock-4'>
                                    Description : <p>{product.description}</p>
                                </div>

                                <button className='submitReview'>Submit Review</button>

                            </div>
                        </div>
                        <h3 className='reviewsHeading'>REVIEWS</h3>
                        {
                            product.reviews && product.reviews[0] ? (

                                <div className='reviews'>
                                    {
                                        product.reviews && product.reviews.map((review) => <ReviewCard review={review} />)
                                    }

                                </div>
                            )
                                :
                                (
                                    <p className='noReviews'>No Reviews Yet</p>
                                )
                        }
                    </Fragment>
            }
        </Fragment>
    )
}

export default ProductDetails