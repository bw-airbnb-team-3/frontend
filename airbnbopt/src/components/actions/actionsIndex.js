import axiosAuth from '../axiosAuth';

export const LISTINGS_LOAD_START = 'LISTINGS_LOAD_START';
export const LISTINGS_LOAD_SUCCESS = 'LISTINGS_LOAD_SUCCESS';
export const LISTINGS_LOAD_FAILURE = 'LISTINGS_LOAD_FAILURE';
export const LISTING_ADD_SUCCESS = 'LISTING_ADD_SUCCESS';
export const LISTING_ADD_FAILURE = 'LISTING_ADD_FAILURE';

export const getListings = () => dispatch => {
    axiosAuth()
      .get('/getListings')
      .then(res => {
        console.log(res.data);
        dispatch({
          type: LISTINGS_LOAD_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: LISTINGS_LOAD_FAILURE,
          payload: 'error loading data'
        });
      });
  };