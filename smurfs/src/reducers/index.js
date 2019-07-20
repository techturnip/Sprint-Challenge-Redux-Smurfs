/*
  Be sure to import in all of the action types from `../actions`
*/

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
    default:
      return state
  }
}
