import { createSelector } from 'reselect';

export const getGameView = state => state.game.view
export const getGameColors = state => state.game.colors

export const getCurrentViewPopulation = createSelector(
  getGameView,
  view => view === 2
)

export const getCurrentViewSatisfaction = createSelector(
  getGameView,
  view => view === 1
)

export const getCurrentViewPlain = createSelector(
  getGameView,
  view => view === 0
)