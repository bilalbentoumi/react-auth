import { useSelector } from 'react-redux'
import { logout } from '../utils/auth'

const Header = () => {

  const loggedIn = useSelector(state => state.auth.loggedIn)

  const signOut = () => {

    logout()
    window.location.href = '/login'
  }

  return (
    <header className="relative bg-white shadow shadow-gray-200">

      <div className="container p-6 flex justify-between items-center gap-10">

        <a href="/">
          <img src="/logo.svg" alt="Gentle WebDesign" className="h-10" />
        </a>

        <ul className="gap-10 hidden sm:flex items-center">

          <li>
            <a href="/" className="block text-gray-400 hover:text-gray-500 text-md font-semibold duration-75">Documentation</a>
          </li>
          <li>
            <a href="/" className="block text-gray-400 hover:text-gray-500 text-md font-semibold duration-75">About</a>
          </li>
          <li>
            <a href="/" className="block text-green-400 hover:text-green-500 text-md font-semibold duration-75">Pricing</a>
          </li>

          {!loggedIn && <li>
            <a href="/login" className="block px-6 py-2 bg-blue-400 hover:bg-blue-500 text-white text-md font-semibold rounded-md duration-75">Login</a>
          </li>}

          {loggedIn && <li>
            <button onClick={signOut} className="block px-6 py-2 bg-blue-400 hover:bg-blue-500 text-white text-md font-semibold rounded-md duration-75">Logout</button>
          </li>}

        </ul>

      </div>

    </header>
  )
}

export default Header