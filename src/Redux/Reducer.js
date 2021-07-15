import { GET_LIST, TOP_SELLER_LIST, WEEKLY_SPECIAL, FEATURED_PRODUCTS, } from './Action';

const initailState = {
    festivalOfferData: [],
    topSellerData: [],
    weeklySpecialData:[],
    featuredProductsData:[]
}
//Reducer
function getReducer(state = initailState, action) {
    switch (action.type) {
        case GET_LIST:
            return { ...state, festivalOfferData: action.payload };
        case TOP_SELLER_LIST:
            return { ...state, topSellerData: action.payload };
        case WEEKLY_SPECIAL:
            return { ...state, weeklySpecialData: action.payload };
        case FEATURED_PRODUCTS:
            return { ...state, featuredProductsData: action.payload };
        default:
            return state;
    }
}
export default getReducer