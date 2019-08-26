import { call, takeEvery } from "redux-saga/effects"

function* GetTestHandler(action: any) {
  try {
    console.log(action)
    yield call(() => console.log("GetTestHandler", action))
  } catch (error) {}
}

export function* GetTest() {
  yield takeEvery("GET_TEST", GetTestHandler)
}
