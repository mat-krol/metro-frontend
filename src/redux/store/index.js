import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import { reducer } from '../leaves';
// import { applyMiddleware } from 'redux'
// import rootSaga from '../sagas'
// import { firebaseMiddleware } from '../../firebase';

const sagaMiddleware = createSagaMiddleware() 

export const store = configureStore({
    reducer: reducer,
    middleware: [
        ...getDefaultMiddleware(),
        sagaMiddleware,
        // firebaseMiddleware
      ]
})

export default function createStore(initialState) {
  return {
    ...store,
    runSaga: sagaMiddleware.run
  }
}