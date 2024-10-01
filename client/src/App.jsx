
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Product, About, Contact, Signup, Login, Cart } from './pages/index'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Header /><Home /><Footer /></>
    },
    {
      path: '/product',
      element: <><Header /><Product /><Footer /></>
    },
    {
      path: '/about',
      element: <><Header /><About /><Footer /></>
    },
    {
      path: '/contact',
      element: <><Header /><Contact /><Footer /></>
    },
    {
      path: '/cart',
      element: <><Header /><Cart /><Footer /></>
    },
    {
      path: '/register',
      element: <><Header /><Signup /><Footer /></>
    },
    {
      path: '/login',
      element: <><Header /><Login /><Footer /></>
    },
  ])

  return (
    <>
      <div className='img'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
