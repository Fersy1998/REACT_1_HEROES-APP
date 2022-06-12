import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'



//Children son los componentes que envuelve PrivateRoute en AppRoutes
export const PrivateRoute = ({children}) => {

    //const location=useLocation();
    //desestructuramos y obtenemos el pathname y el search
    const {pathname, search}=useLocation();
    
    localStorage.setItem('last_path',pathname+search);
    const {user}=useContext(AuthContext);
    
    
  return user.logged ? children : <Navigate to='/login' />
            
}
