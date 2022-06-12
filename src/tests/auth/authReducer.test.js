import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"
import '@testing-library/jest-dom'
describe('Pruebas en authReducer.js', ()=>{
    test('should return the default state', () => { 
        const state=authReducer({logged:false}, {});
        expect(state).toEqual({logged:false});
    
    
    })
    test('should login the user with the name ', () => { 
        const action={
            type:types.login,
            payload:{
                name:'Fersy'
            }
        }
        const state=authReducer({logged:false}, action);
        expect(state).toEqual({
            name:'Fersy',
            logged:true
        })
       
    })
    test('should delete the name and logout the user', () => { 
        const action={
            type:types.logout,
        }
        const state=authReducer({
            name:'Fersy',
            logged:true
        }, action);
        
        expect(state).toEqual({logged:false})
    
    })
})