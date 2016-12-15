import getJobs from './getJobs'
import { newFetch } from '../../lib/fetch'

export const setGeocodeResultAction = (location) => ({
  type: 'SET_GEOCODED_SEARCH',
  searchLoc: location
})

export const geocodeResultHasErrorsAction = (location) => ({
  type: 'SEARCH_GEOCODE_ERROR',
  searchLoc: location
})

export default function geocodeSearch (address, distance) {
  return function (dispatch) {
    var key = "AIzaSyD-6m0bT_U-ShiqoqaqV7VcxZgFl5qtzh4"
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + key, {})
      .then((response) => response.json())
        .then((json) => {
          if (json.results[0]) {
            dispatch(setGeocodeResultAction({
              lat: json.results[0].geometry.location.lat,
              lng: json.results[0].geometry.location.lng
            }))
            dispatch(getJobs({
              lat: json.results[0].geometry.location.lat,
              lng: json.results[0].geometry.location.lng
            },
            distance))
          } else {
            dispatch(geocodeResultHasErrorsAction([
              {
                div: 'non-specific',
                message: 'Invalid Address. Geocode Failed'
              }
            ]))
          }
        })
  }
}
