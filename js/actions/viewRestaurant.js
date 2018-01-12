import { VIEW_RESTAURANT } from './actionTypes'

// restaurant details

export function viewRestaurant(restaurant) {
    return { 
        type: VIEW_RESTAURANT, 
        restaurant
    }
};