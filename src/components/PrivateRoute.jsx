import React from 'react'
import {Navigate, Outlet} from "react-router-dom"

const PrivateRoute = () => {

    const isAdmin = true;

    if(isAdmin === false)
        return <Navigate to="/notfound" />

  return (
    <Outlet/>
  )
}

export default PrivateRoute