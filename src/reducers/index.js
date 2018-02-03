import {
  IS_FETCHING,
  FETCH_FAILED,
  FETCH_SUCCESS,
  REQUEST_DATA
} from '../actions/types'

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  fecthDataSuccess: null,
  fetchDataError: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, isFetching: action.payload }

    case FETCH_SUCCESS:
      return { ...state, fecthDataSuccess: action.payload, isFetching: false }

    case FETCH_FAILED:
      return { ...state, fetchDataError: action.payload, isFetching: false }

    case REQUEST_DATA:
      return { ...state, data: action.payload }

    default:
      return state
  }
}
