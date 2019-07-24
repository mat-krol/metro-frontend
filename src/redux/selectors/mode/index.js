import { createSelector } from 'reselect';

export const getModeBuildModal = state => state.mode.build.modal
export const getModeBuildLine = state => state.mode.build.line
export const getModeBuildLinePoints = state => state.mode.build.line.points
export const getModeBuildLineBranchPoints = state => state.mode.build.line.branch[0].points
export const getModeBuildLineLength = state => state.mode.build.line.branch[0].length
export const getModeBuildLineColor = state => state.mode.build.line.color
export const getModeBuildOngoing = state => state.mode.build.ongoing

export const getModeBuildLineStations = createSelector(
  getModeBuildLineBranchPoints,
  points => Object.keys(points).length
)

export const getModeBuildLineCost = createSelector(
  getModeBuildLineStations,
  getModeBuildLineLength,
  (stations, length) => Math.floor(stations * 20 + length * 100)
)