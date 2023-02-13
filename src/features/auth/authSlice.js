import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessJWT: localStorage.getItem('accessJWT') || '',
  refreshJWT: localStorage.getItem('refreshJWT') || '',
  loggedIn: localStorage.getItem('loggedIn') || false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessJWT: (state, action) => {
      localStorage.setItem('accessJWT', action.payload)
      state.accessJWT = action.payload
    },
    setRefreshJWT: (state, action) => {
      localStorage.setItem('refreshJWT', action.payload)
      state.refreshJWT = action.payload
    },
    setLoggedIn: (state, action) => {
      localStorage.setItem('loggedIn', action.payload)
      state.loggedIn = action.payload
    },
    removeAccessJWT: (state, action) => {
      localStorage.removeItem('accessJWT')
      state.accessJWT = ''
    },
    removeRefreshJWT: (state, action) => {
      localStorage.removeItem('refreshJWT')
      state.refreshJWT = ''
    },
    removeLoggedIn: (state, action) => {
      localStorage.removeItem('loggedIn')
      state.loggedIn = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAccessJWT, setRefreshJWT, setLoggedIn, removeAccessJWT, removeRefreshJWT, removeLoggedIn } = authSlice.actions

export default authSlice.reducer