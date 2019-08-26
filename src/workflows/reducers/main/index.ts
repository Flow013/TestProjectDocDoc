import { handleActions, combineActions } from 'redux-actions'

interface IReduxState {
  word: string,
  index: number,
}

export const initialState:IReduxState = {
  word: "test",
  index: 0,
}

export default handleActions<IReduxState, any>({
  ["GET_TEST"]: (state, action): IReduxState => ({
    ...state,
    word: action.payload,
    index: state.index + 1,
  }),
}, initialState)