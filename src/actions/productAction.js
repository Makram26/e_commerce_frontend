import axios from  "axios"

import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL, 
    CLEAR_ERROR,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL

} from "../constants/productsConstants"


// get all products 
export const getProduct =() => async (dispatch)=>{

    try {

        dispatch({type:ALL_PRODUCT_REQUEST})
        // console.log("URL>>>>>>",`${URL}/api/v2/products`)
        const {data} = await axios.get(`/api/v2/products`)
        // console.log(">>>>>>>>>>>>",data)
        dispatch ({
            type:ALL_PRODUCT_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch ({
            type:ALL_PRODUCT_FAIL,
            payload:error
        })
        
    }

}


// get product details 

export const getProductDetails =(id) => async (dispatch)=>{

    try {

        console.log(">>>>>>>>>>",id)

        dispatch({type:PRODUCT_DETAILS_REQUEST})
        // debugger;
        // console.log("URL>>>>>>",`${URL}/api/v2/products`)
        const {data} = await axios.get(`/api/v2/product/${id}`)
        console.log(">>>>>>>>>>>>",data)
        // debugger;
        dispatch ({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data.My_Proudct,
        })
        
    } catch (error) {
        dispatch ({
            type:PRODUCT_DETAILS_FAIL,
            payload:error
        })
        
    }

}




// clearing Errors
export const clearErrors =async (dispatch)=>{
   dispatch({type:CLEAR_ERROR})
}