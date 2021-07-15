import * as axios from 'axios';
import {CommonAPI} from '../Common/Api'

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json'
  }
};
//Action
export const GET_LIST ='GET_LIST'
export const TOP_SELLER_LIST ='TOP_SELLER_LIST'
export const WEEKLY_SPECIAL ='WEEKLY_SPECIAL'
export const FEATURED_PRODUCTS ='FEATURED_PRODUCTS'

//Api calling Using Axios to Dispatch Response 
export const getList = () => dispatch =>{ 

//Festival_Offer
  axios.get(CommonAPI.Festival_Offer,axiosConfig)
.then(function (response) {
  dispatch({
    type:GET_LIST,
    payload:response.data.product, 
  })
})
.catch(function (error) {
  console.log(error);
})

//Top_Sellers
axios.get(CommonAPI.Top_Sellers,axiosConfig)
.then(function (response) {
  dispatch({
    type:TOP_SELLER_LIST,
    payload:response.data.product, 
  })
})
.catch(function (error) {
  console.log(error);
})

//Weekly_Special
axios.get(CommonAPI.Weekly_Special,axiosConfig)
.then(function (response) {
  dispatch({
    type:WEEKLY_SPECIAL,
    payload:response.data.product, 
  })
})
.catch(function (error) {
  console.log(error);
})

//Featured_Products
axios.get(CommonAPI.Featured_Products,axiosConfig)
.then(function (response) {
  dispatch({
    type:FEATURED_PRODUCTS,
    payload:response.data.product , 
  })
})
.catch(function (error) {
  console.log(error);
})
}


