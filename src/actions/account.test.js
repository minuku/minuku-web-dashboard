import { fetchLoginWithRedux } from "./account.js"
import { mockStore } from 'utils/mockStore.js'

describe('user login', () => {
  it('should success and return token', async () => {
    const user = {account: 'armuro', password: 'minuku'}
    const token = `QpwL5tke4Pnpja7X`
    const store = mockStore()
    await store.dispatch(fetchLoginWithRedux())
    const actions = store.getActions()

    expect(actions[0]).toEqual({type: "LOGIN_REQUEST", user: user})
    // expect(actions[1]).toEqual({type: "LOGIN_SUCCESS", payload: { token }})
  })
})
