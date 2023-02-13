import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './Home'
import SignIn from './SignIn'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
])

function App() {

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
