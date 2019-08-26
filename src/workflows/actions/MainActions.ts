interface IGetTest {
  type: string
  payload: string
}

export function SetTestWord(word: string): IGetTest {
  return { type: "GET_TEST", payload: word }
}
