import { createSelector } from 'reselect';
import _ from 'lodash';

export const getMapAreas = state => state.map.areas
export const getMapLines = state => state.map.lines

export const getMapLinesNumber = createSelector(
  getMapLines,
  lines => Object.keys(lines).length
)

export const getMapAreasNumber = createSelector(
  getMapAreas,
  areas => Object.keys(areas).length
)

export const getMapStationsNumber = createSelector(
  getMapLines,
  lines => {
    const total = _.reduce(lines, (sum, n) => (
      sum + _.reduce(n.branch, (sum, m) => (
        sum + m.points.length
      ), 0)
    ), 0)
    return total
  }
)