import { Navbar } from "../../../components/ui/NavBar"
import {mount} from 'enzyme'
import { AuthContext } from "../../../auth/authContext"
import { MemoryRouter } from "react-router-dom";
import { types } from "../../../types/types";
import '@testing-library/jest-dom'

//  Hacemos mock del use Navigate
const mockUseNavigate=jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockUseNavigate,
}))
/********************/
describe('Pruebas en NavBar.js', ()=>{
//Mock del dispatch
    const dispatch=jest.fn()
    test('should shows correctly', () => { 
        const contextvalue={user:{
            logged:true,
            name:'Pedro'
        }}
        const wrapper=mount( 
        <AuthContext.Provider value={contextvalue} >
            <MemoryRouter><Navbar /></MemoryRouter>
        </AuthContext.Provider>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span').text()).toBe('Pedro');
    })
    test('should call the logOut, Navigate and dispatch with the arguments', () => { 
    //OJO, en este caso es necesario enviar el dispatch ya que con ello enviamos la acción
    //de logout y por eso hacemos mock de esa función arriba
        const contextvalue={user:{
            logged:true,
            name:'Pedro'
        }, dispatch}
        const wrapper=mount( 
        <AuthContext.Provider value={contextvalue} >
            <MemoryRouter><Navbar /></MemoryRouter>
        </AuthContext.Provider>)
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith({ type:types.logout});
        expect(mockUseNavigate).toHaveBeenCalledWith('/login', {
            replace:true
        })
        localStorage.setItem('last_path', '/dc');
        expect(mockUseNavigate).toHaveBeenCalledWith('/dc', {
            replace:true
        })
    })
})