import _ from 'lodash'
import { getMapAreas, getMapAreasNumber } from '../map'
import { createSelector } from 'reselect';

export const getRoundBudgetPlain = state => state.round.budget
export const getRoundModal = state => state.round.modal
export const getRoundDatePlain = state => state.round.date

export const getRoundBudget = createSelector(
  getRoundBudgetPlain,
  budget => stringify(budget)
)

export const getRoundDate = createSelector(
  getRoundDatePlain,
  date => {
    const today = new Date(date)
    const result = today.toDateString().substring(4, 10)
    // "OK12".substr(2) + "OK12".substr(0,2) gives "12OK"
    return result
  }
)

export const getRoundPopulationPlain = createSelector(
  getMapAreas,
  list => (
    _.reduce(list, (sum, n) => (
      sum + n.population
    ), 0)
  )
)

export const getRoundPopulation = createSelector(
  getRoundPopulationPlain,
  population => stringify(population)
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

const stringify = number => {
  if (number < 1000) return Math.round(number) + 'K'
  else if (number < 1000000) return Math.round(number / 1000) + 'M'
  else return Math.round(number / 1000000) + 'B'
}