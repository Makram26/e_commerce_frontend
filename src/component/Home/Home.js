import React, { Fragment, useEffect } from 'react'

import { CgMouse } from "react-icons/cg"
import Product from "./Product.js"
import "./Home.css"

import MetaData from '../layout/MetaData.js'
import { clearErrors, getProduct } from '../../actions/productAction.js'

import { useSelector, useDispatch } from "react-redux"
import Loader from '../layout/Loader/Loader.js'

import { useAlert } from 'react-alert'


// const product ={
//     id:1,
//     name:"Blue Tshirt",
//     images:[{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQOR50XLvrF4UIz7T_96kyiEh0ficIXL_dYyyrPSAvF4HdkGuQigCO7FmkkTICzdrd3Y&usqp=CAU"}],
//     price:"$3000",

// }

function Home() {

    const dispatch = useDispatch()
    const { loading, error, products, productsCount } = useSelector((state) => state.products)

    const alert=useAlert()


    console.log("<><><><", products)

    useEffect(() => {
       
        console.log("eriralskdfjklasjdf",error)
        // console.log("?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",error.response.data.messages)

        if(error){
        alert.error(error.response.data.message)
        dispatch(clearErrors())
        }
        dispatch(getProduct());
    }, [dispatch,error,alert])
    return (
        <Fragment>
            {
                loading ? (
                    <Loader/>
                ) : (
                    <>
                        <MetaData title="E-Commerce" />
                        <div className='banner'>
                            <p>Welcome to E-Commerce</p>
                            <h1>FIND AMAZING PRODUCTS BELOW</h1>
                            <a href="#container">
                                <button>
                                    Scroll <CgMouse />
                                </button>
                            </a>
                        </div>
                        <h2 className='homeHeading'>Featured Products</h2>

                        <div className='container' id='container'>
                            {
                                products && products.map(product => (
                                    <Product product={product} />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </Fragment>
    )
}

export default Home