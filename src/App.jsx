import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Error from './components/error/Error'
import Home from './pages/home/Home'
import MainLayout from './pages/layouts/mainLayout/MainLayout'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />} errorElement={<Error />}>
          <Route index element={<Home />} />
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
