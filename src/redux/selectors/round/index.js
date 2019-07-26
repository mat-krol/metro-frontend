import _ from 'lodash'
import { getMapAreas, getMapAreasNumber } from '../map'
import { createSelector } from 'reselect';

export const getRoundBudgetPlain = state => state.round.budget
export const getRoundModal = state => state.round.modal
export const getRoundDatePlain = state => state.round.date

export const getRoundBudget = createSelector(
  getRoundBudgetPlain,
  budget => Math.floor(budget)
)

export const getRoundDate = createSelector(
  getRoundDatePlain,
  date => {
    const today = new Date(date)
    const result = today.toDateString().substring(4)
    // "OK12".substr(2) + "OK12".substr(0,2) gives "12OK"
    return result
  }
)

export const getRoundPopulation = createSelector(
  getMapAreas,
  list => (
    _.reduce(list, (sum, n) => (
      sum + n.population * 1000
    ), 0)
  )
)

export const getRoundSatisfaction = createSelector(
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