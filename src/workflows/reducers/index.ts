import { 
  createStore, applyMiddleware, combineReducers, Store 
} from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import rootSaga from "../sagas"

import main from "./main"

export const rootReducer = combineReducers({
  main
})

export default function createReduxStore(): Store {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)
  return store
}
