import { FETCH_FAILED, FETCH_SUCCESS, REQUEST_DATA, IS_FETCHING } from './types'

import fetchData from '../api'

export function requestData() {
  return dispatch => {
    dispatch(isFetching())
    fetchData().then(data => {
      dispatch({
        type: REQUEST_DATA,
        payload: data
      }).catch(error => dispatch(fetchFailed()))
      dispatch(fetchSuccess())
    })
  }
}

export function isFetching() {
  return { type: IS_FETCHING, payload: true }
}

export function fetchSuccess() {
  return { type: FETCH_SUCCESS, payload: 'SUCCESSFULLLY FETCH THE DATA' }
}

export function fetchFailed() {
  return { type: FETCH_FAILED, payload: 'FAILED-FETCH' }
}
