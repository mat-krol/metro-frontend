import _ from 'lodash'
import { getMapAreas, getMapAreasNumber } from '../map'
import { createSelector } from 'reselect';

export const getGameBudget = state => state.game.budget
export const getGameModal = state => state.game.modal

export const getGamePopulation = createSelector(
  getMapAreas,
  list => (
    _.reduce(list, (sum, n) => (
      sum + n.population * 1000
    ), 0)
  )
)

export const getGameSatisfaction = createSelector(
  getMapAreas,
  getMapAreasNumber,
  (list, number) => {
    const total = _.reduce(list, (sum, n) => (
      sum + n.satisfaction
    ), 0)
    const result = Math.round( total / number * 10) / 10
    return result
  }
)