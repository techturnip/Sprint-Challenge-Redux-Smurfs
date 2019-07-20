import axios from 'axios'

// ACTION TYPES =======================================|
//=====================================================|
// Smurfs action types

// GET_SMURFS
export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED'
// ADD_SMURF
export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED'
// UPDATE_SMURF
export const UPDATE_SMURF_START = 'UPDATE_SMURF_START'
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS'
export const UPDATE_SMURF_FAILED = 'UPDATE_SMURF_FAILED'
// DELETE_SMURF
export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAILED = 'DELETE_SMURF_FAILED'

// ACTION CREATORS ====================================|

// addSmurf() - MVP - POST Request
//=====================================================|
export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADD_SMURF_START })

    return axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: ADD_SMURF_FAILED, payload })
      })
  }
}

// getSmurfs() - MVP - GET Request
//=====================================================|
export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: GET_SMURFS_START })

    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        // Added timeout to show loading spinner for 1 second
        setTimeout(() => {
          dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
        }, 1000)
      })
      .catch(err => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: GET_SMURFS_FAILED, payload })
      })
  }
}

// updateSmurf() - Stretch - PUT Request
//=====================================================|

// deleteSmurf() - Stretch - DELETE Request
//=====================================================|
