import { combineReducers } from 'redux'
import {FETCH_RESTAURANTS, 
        FETCH_RESTAURANTS_FAIL, 
        FETCH_RESTAURANTS_SUCCESS, 
        SORT_RESTAURANTS, 
        DISPLAY_RESTAURANTS, 
        VIEW_RESTAURANT} from '../actions/actionTypes'


export function restaurantApp(state, action) {

    let changes = {};

    switch (action.type) {
        case FETCH_RESTAURANTS:
            changes.restaurantApi = { isFetching: action.state, 
                                      dataFetched: true };
            break;
        case FETCH_RESTAURANTS_FAIL:
            break;
        case FETCH_RESTAURANTS_SUCCESS:
            changes.restaurantsData = {
                name: "",
                phone: "",
                distance: "", 
                price: "",
                rating: ""
            };
            break;
        case SORT_RESTAURANTS:
            break;
        case DISPLAY_RESTAURANTS:
            break;
        case VIEW_RESTAURANT:
            break;
        default:
            return state;
    }

    return Object.assign({}, state, changes);
};