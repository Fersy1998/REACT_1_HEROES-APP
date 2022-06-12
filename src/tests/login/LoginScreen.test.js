import { LoginScreen } from "../../components/login/LoginScreen";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/authContext";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { types } from "../../types/types";

const mockUseNavigate=jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockUseNavigate
}))

describe('Pruebas en LoginScreen', ()=>{

    test('should match the snapshot', () => { 
    /*
        const contextValue={
        }*/
        const wrapper=mount(
        <AuthContext.Provider value={ {user:{logged:false}}} >
            <MemoryRouter initialEntries={['/login']}>
                <LoginScreen />
            </MemoryRouter>
        </AuthContext.Provider>)
        expect(wrapper).toMatchSnapshot();
    
    })
    const dispatch=jest.fn();
    test('should match the snapshot', () => { 
            
            const action={
                type:types.login,
                payload:{
                    name:'Fersy'
                }
            }
            const wrapper=mount(
            <AuthContext.Provider value={ {user:{logged:false}, dispatch}} >
                <MemoryRouter initialEntries={['/login']}>
                    <LoginScreen />
                </MemoryRouter>
            </AuthContext.Provider>)
            wrapper.find('button').simulate('click');
            expect(dispatch).toHaveBeenCalledWith(action);
            expect(mockUseNavigate).toHaveBeenCalledWith('/search', {replace:true});
            
            
        })
    


})