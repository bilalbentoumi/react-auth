import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
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
