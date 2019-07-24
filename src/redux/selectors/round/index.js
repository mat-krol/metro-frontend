export const getGameBudget = state => state.game.budget
export const getGameModal = state => state.game.modal
export const getGamePopulation = state => state.game.population

// export const getUserStars = createSelector(
//   getGameView,
//   list => (
//     _.reduce(list, (sum, n) => (
//       sum + n.stars
//     ), 0)
//   )
// )
