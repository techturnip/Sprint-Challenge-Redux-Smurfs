import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED
} from '../actions'

// initial/default state for this project
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START: {
      return {
        ...state,
        fetchingSmurfs: true
      }
    }
    case GET_SMURFS_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    }
    case GET_SMURFS_FAILED: {
      console.error(action.payload)
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    }
    default:
      return state
  }
}
