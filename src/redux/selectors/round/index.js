import _ from 'lodash'
import { getMapAreas, getMapAreasNumber } from '../map'
import { createSelector } from 'reselect';
import { stringify } from '../utils'

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
      sum + n.metro.population
    ), 0)
  )
)

export const getRoundPopulationAverage = createSelector(
  getRoundPopulationPlain,
  getMapAreasNumber,
  (population, number) => Math.round(population / number)
)

export const getRoundPopulation = createSelector(
  getRoundPopulationPlain,
  population => stringify(population)
)

export const getRoundSatisfaction = createSelector(
  getMapAreas,
  getRoundPopulationPlain,
  (list, number) => {
    const total = _.reduce(list, (sum, n) => (
      sum + n.metro.satisfaction * n.metro.population
    ), 0)
    const result = Math.round( total / number * 10) / 10
    return result
  }
)