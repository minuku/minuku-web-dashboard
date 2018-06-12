import { fetchLoginWithRedux, register } from "./account.js"
import { mockStore } from 'utils/mockStore.js'

describe('user login', () => {
  it('should register success', async () => {
    const user = {account: 'armuro', password: 'minuku'}
    const store = mockStore()
    await store.dispatch(register(user))
    const actions = store.getActions()

    expect(actions[0]).toEqual({type: "REGISTER_REQUEST", user: user})
    // expect(actions[1]).toEqual({type: "REGISTER_SUCCESS", user: user})
  })

  it('should login success', async () => {
    const user = {account: 'armuro', password: 'minuku'}
    // const token = `QpwL5tke4Pnpja7X`
    const store = mockStore()
    await store.dispatch(fetchLoginWithRedux(user))
    const actions = store.getActions()

    expect(actions[0]).toEqual({type: "LOGIN_REQUEST", user: user})
  })
})
