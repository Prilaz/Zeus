import React from 'react'
import { isAuthenticated } from '../api/userApi'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
  return (
    <>
    isAuthenticated() && isAuthenticated().role ==1 ? <Outlet/> : <Navigate to={'/login'}/>
    </>
  )
}

export default AdminRoutes