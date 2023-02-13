import axios from 'axios'
import { store } from '../app/store'
import { setAccessJWT, setLoggedIn, setRefreshJWT, removeAccessJWT, removeRefreshJWT, removeLoggedIn } from '../features/auth/authSlice'

export function login(data) {

  return new Promise(async (resolve, reject) => {

    try {

      const res = await axios.post('login', data)

      if (res.data.accessJWT) {

        store.dispatch(setAccessJWT(res.data.accessJWT))
        store.dispatch(setRefreshJWT(res.data.refreshJWT))
        store.dispatch(setLoggedIn(true))

        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessJWT}`

        resolve(res.data)
      }
    } catch (err) {

      reject(err)
    }
  })
}


export function logout() {

  store.dispatch(removeAccessJWT())
  store.dispatch(removeRefreshJWT())
  store.dispatch(removeLoggedIn())
}