import axios from 'axios'

axios.defaults.baseURL = 'https://goapi.pilinux.me/api/v1/'

if (localStorage.getItem('accessJWT')) {

  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessJWT')}`
}

axios.interceptors.response.use(response => response, async error => {

  if (error.response.status === 401) {

    if (localStorage.getItem('refreshJWT')) {

      const res = await axios.post('refresh', {
        refreshJWT: localStorage.getItem('refreshJWT')
      })

      if (res.data.accessJWT) {

        localStorage.setItem('accessJWT', res.data.accessJWT)
        localStorage.setItem('refreshJWT', res.data.refreshJWT)
        localStorage.setItem('loggedIn', true)

        window.location.href = '/'
      }
    }

    window.location.href = '/login'
  }
})