import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {

    axios.get('test-jwt').then(res => {
      console.log('Access granted!')
    })
  }, [])

  return (
    <div className="flex justify-center items-center pt-20">
      Hi There!
    </div>
  )
}

export default Home