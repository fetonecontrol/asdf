import * as c from './ActionTypes';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

export const requestWeather = () => ({
  type: c.REQUEST_WEATHERDATA
});

export const getWeatherSuccess = (weatherdata) => ({
  type: c.GET_WEATHERDATA_SUCCESS,
  weatherdata
});

export const getWeatherFailure = (error) => ({
  type: c.GET_WEATHERDATA_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestWeather);
    return fetch('https://maps.googleapis.com/maps/api/js?key={process.env.API_KEY}&callback=initMap') 
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getWeatherSuccess(jsonifiedResponse));
          console.log(jsonifiedResponse.coord.lon);
        })
      .catch((error) => {
        dispatch(getWeatherFailure(error));
        console.log("boo, no good")
      });
  }
}