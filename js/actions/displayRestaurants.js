import { DISPLAY_RESTAURANTS } from './actionTypes'

// display restaurant list

export function displayRestaurants(restaurants) {
    return { 
        type: DISPLAY_RESTAURANTS, 
        restaurants 
    }
};