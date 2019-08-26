import { call, all, fork } from "redux-saga/effects"
import appStartupHandler from "./Startup"
import main from "./main"

const resultSagasArray: any[] = [...main]

export default function* root() {
  yield all(resultSagasArray.map(saga => fork(saga)))
  yield call(appStartupHandler)
}
