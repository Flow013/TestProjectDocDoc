import { call  } from 'redux-saga/effects'


export default function* appStartupHandler() {
  yield call(() => console.log("appStartupHandler"))
}