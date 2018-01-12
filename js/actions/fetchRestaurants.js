import { FETCH_RESTAURANTS, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAIL } from './actionTypes'

// get isFetching
export function isFetching(state) {
    return {
        type: FETCH_RESTAURANTS,
        state: state
    };
}

// getIsSuccess
export function restaurantFetchSuccess(data) {
    return {
        type: FETCH_RESTAURANT_SUCCESS,
        data: data
    };
}

// getIsFailure
export function restaurantFetchFailure(error) {
    return {
        type: FETCH_RESTAURANT_FAIL,
        error: error
    };
}

export function getGeolocalizedList() {
    return (dispatch)=> {
      dispatch(isFetching(true));
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(isFetching(false));
          dispatch(fetchWeather(position.coords.latitude, position.coords.longitude));
        },
        (error) => {
          dispatch(restaurantFetchFailure(error));
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    }
  }
  
  export function fetchList(lat, long) {
    return (dispatch) => {
      dispatch(isFetching(true));
      //Do API call to http://api.com/search?lat=${lat}&lon=${long}
    }
  }

// getWeather
export function fetchWeather(location) {
    return (dispatch) => {
        dispatch(isFetching(true));

        var lat = "";
        var long = "";
        let secret = "9WhKBgYkfpgnOKVgUErQuQjfcnUz1a4CV3Qsfay8MPw1sBwf27TqK7A7jhRYfWVd"
        let key = "QeRdnR3mPcjLHiFE3qtRucSCvv7sb0krZo87abj1EgK45ntbUfqecn1unPLmDN4Yr_v23iHGREEEIbDBiv1OdqTXrsm_onLdFB6ZRw6aBvWCLxHtsA5zKns3XnhRWnYx";
        let url = "https://api.yelp.com/v3/businesses/search?latitude=" + lat + "&longitude=" + long;
        axios.get(url)
            .then((response) => {
                if (response.status != 200) {
                    throw Error(response.statusText);
                }

                dispatch(isFetching(false));

                return response;
            })
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                return dispatch(weatherFetchSuccess(data));
            })
            .catch((e) => dispatch(weatherFetchFailure(e)));
    };
}