import { GET_LOCATION } from './actionTypes'

// get location

export function getLocation(location) {
    return { 
        type: GET_LOCATION, 
        location 
    }
};