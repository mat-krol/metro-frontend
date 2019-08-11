import { createSelector } from 'reselect';

export const getLevelsList = state => state.levels.list
export const getLevelsPosition = state => state.levels.position

export const getCurrentViewPlain = createSelector(
  getLevelsList,
  getLevelsPosition,
  (list, position) => list[position].cities
)