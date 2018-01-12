import { SORT_RESTAURANTS } from './actionTypes'

// order restaurants

export function sortRestaurants(restaurants) {
    return { 
        type: SORT_RESTAURANTS, 
        restaurants 
    }
};