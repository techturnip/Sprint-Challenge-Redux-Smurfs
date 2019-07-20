import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILED,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILED
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
    // case UPDATE_SMURF
    case UPDATE_SMURF_START: {
      return {
        ...state,
        updatingSmurf: true
      }
    }
    case UPDATE_SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: false
      }
    }
    case UPDATE_SMURF_FAILED: {
      console.error(action.payload)
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      }
    }
    // case DELETE_SMURF
    case DELETE_SMURF_START: {
      return {
        ...state,
        deletingSmurf: true
      }
    }
    case DELETE_SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false
      }
    }
    case DELETE_SMURF_FAILED: {
      console.error(action.payload)
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      }
    }
    default:
      return state
  }
}
