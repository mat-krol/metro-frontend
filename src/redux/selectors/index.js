import { createSelector } from 'reselect';
import _ from 'lodash';

export const getMapAreas = state => state.map.areas
export const getMapLines = state => state.map.lines

export const getMapLinesNumber = createSelector(
  getMapLines,
  lines => Object.keys(lines).length
)

export const getGameBudget = state => state.game.budget
export const getGameModal = state => state.game.modal
export const getGamePopulation = state => state.game.population
export const getGameView = state => state.game.view
export const getGameColors = state => state.game.colors

export const getModeExpandModal = state => state.mode.expand.modal
export const getModeExpandLine = state => state.mode.expand.line
export const getModeExpandLinePoints = state => state.mode.expand.line.points
export const getModeExpandLineLength = state => state.mode.expand.line.length
export const getModeExpandLineColor = state => state.mode.expand.line.color

export const getModeBuildModal = state => state.mode.build.modal
export const getModeBuildLine = state => state.mode.build.line
export const getModeBuildLinePoints = state => state.mode.build.line.points
export const getModeBuildLineLength = state => state.mode.build.line.length
export const getModeBuildLineColor = state => state.mode.build.line.color

export const getModeBuildLineStations = createSelector(
  getModeBuildLinePoints,
  points => Object.keys(points).length
)

export const getModeBuildLineCost = createSelector(
  getModeBuildLineStations,
  getModeBuildLineLength,
  (stations, length) => Math.floor(stations * 20 + length * 100)
)

export const getModeExpandLineStations = createSelector(
  getModeExpandLinePoints,
  points => Object.keys(points).length
)

export const getModeExpandLineCost = createSelector(
  getModeExpandLineStations,
  getModeExpandLineLength,
  (stations, length) => Math.floor(stations * 20 + length * 100)
)


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

export const getUserStars = createSelector(
  getGameView,
  list => (
    _.reduce(list, (sum, n) => (
      sum + n.stars
    ), 0)
  )
)
