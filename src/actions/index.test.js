import { fetchLoginWithRedux } from "./index.js"
import { mockStore } from 'utils/mockStore.js'

describe('user login', () => {
  it('should success with token', async () => {
    const token = `QpwL5tke4Pnpja7X`
    const store = mockStore()
    await store.dispatch(fetchLoginWithRedux())
    const actions = store.getActions()

    expect(actions[0]).toEqual({type: "LOGIN_REQUEST"})
    expect(actions[1]).toEqual({type: "LOGIN_SUCCESS", payload: { token }})
  })
})
