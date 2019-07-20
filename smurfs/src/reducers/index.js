import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED
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
    // case GET_SMURFS
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
    // case ADD_SMURF
    case ADD_SMURF_START: {
      return {
        ...state,
        addingSmurf: true
      }
    }
    case ADD_SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false
      }
    }
    case ADD_SMURF_FAILED: {
      console.error(action.payload)
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    }
    default:
      return state
  }
}
