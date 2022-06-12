import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'

import { authReducer } from './auth/authReducer'
import { AppRoutes } from './routes/AppRoutes'

export const HeroesApp = () => {


const init=()=>{
//Si el user no existe regresa el logged en false, si existe regresa el user
  return JSON.parse(localStorage.getItem('user')) || {logged:false}

}
//Dispatch dspara acciones al Reducer y el state brinda información de login o logout 

//Necesitamos el reducer (authReducer), el estado inicial {} y el init para que solo se ejecute una vez (lee el estado iniciaal)
  const [user, dispatch] = useReducer(authReducer, {}, init)
  
  //  Esta línea se encarga de guardar en memoria al usuario al estar pendiente del usuario
  useEffect(() => {
    
    if(!user) localStorage.removeItem('user');
    localStorage.setItem('user',JSON.stringify(user));
  }, [user])
  
  
  return (
      <AuthContext.Provider value={{user, dispatch}}>
         <AppRoutes />
      </AuthContext.Provider>
       
    
  )
}
