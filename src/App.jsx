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
import PrivateSellerForm from './components/accountForm/PrivateSellerForm'
import DealerForm from './components/accountForm/DealerForm'
import CompanyInfoForm from './components/accountForm/CompanyInfoForm'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />} errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route path='seller' element={<PrivateSellerForm />} />
          <Route path='dealer' element={<DealerForm />} />
          <Route path='company' element={<CompanyInfoForm />} />
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
