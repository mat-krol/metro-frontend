import { createSelector } from 'reselect';

export const getMapAreas = state => state.map.areas
export const getMapLines = state => state.map.lines

export const getMapLinesNumber = createSelector(
  getMapLines,
  lines => Object.keys(lines).length
)