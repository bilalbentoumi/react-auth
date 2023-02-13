import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Home = () => {

  const loggedIn = useSelector(state => state.auth.loggedIn)

  useEffect(() => {

    axios.get('test-jwt').then(res => {
      console.log('Access granted!')
    })
  }, [])

  if (!loggedIn) {

    return <Navigate to="/login" />
  }

  return (
    <div className="flex justify-center items-center pt-20">
      Hi There! you are logged in.
    </div>
  )
}

export default Home