import {createSlice} from '@reduxjs/toolkit';

const positionsSlice = createSlice({
  name: '@@positions',
  initialState: [],
  reducers: {
    addPositions(_, action) {
      return action.payload;
    }
  }
});

export const {addPositions} = positionsSlice.actions;
export const positionsReducer = positionsSlice.reducer;


// Selectors
export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter(pos => {
    const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
    return filters.every(filter => posFilters.includes(filter));
  });
};