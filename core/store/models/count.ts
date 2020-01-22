import { createModel } from '@rematch/core'

type CountState = number;

const countModel = createModel({
  state: 0 as CountState,
  reducers: {
    increment(state: CountState, payload: CountState) {
      return state + payload
    },
  },
  effects: dispatch => ({
    async incrementAsync(payload: CountState) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        dispatch.count.increment(payload)
    },
  }),
})

export default countModel;
