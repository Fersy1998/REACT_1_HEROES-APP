import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = () => {
    
    const navigate=useNavigate()
    
    //de context sacamos el dispatch
    //const context = useContext(AuthContext)
    const {dispatch} = useContext(AuthContext)
    
    const handleLogin=()=>{
        const last_path=localStorage.getItem('last_path') || ('/search');
        const action={
          type: types.login,
          payload:{
            name:'Fersy'
          }
        
        }
        dispatch(action);
      
        navigate(last_path, {
          replace:true
        }) ;
    }
  return (
    <div className='container mt-5'>
        <h5>Login Screen</h5>   <hr />
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
    </div>
  )
}
