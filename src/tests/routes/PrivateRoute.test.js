import { PrivateRoute } from "../../routes/PrivateRoute";
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    Navigate:()=><span>No privado</span>
}))
describe('Pruebas en PrivateRoute.js', ()=>{
    //Prototyping the setitem from localStorage
    Storage.prototype.setItem=jest.fn();
    test('should render the component if the user is authenticated and save in localstorage', () => { 
        const contextValue={
            user:{
                name:'Fersy',
                logged:true
            }
            
        }
        
        //USAMOS EL MEMORY ROUTER PORQUE NECESITAMOS USAR EL USELOCATION
        const wrapper=mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Componente privado</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>

        )
        console.log(wrapper);
        expect(wrapper.text().trim()).toBe('Componente privado');
        expect(localStorage.setItem).toHaveBeenCalledWith('last_path','/');
    })
    
    test('shouldnt render the component if the user is not authenticated', () => { 
        const contextValue={
            user:{
                logged:false
            }
            
        }
        
        //USAMOS EL MEMORY ROUTER PORQUE NECESITAMOS USAR EL USELOCATION
        const wrapper=mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Componente privado</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>

        )
        console.log(wrapper);
        //expect(wrapper).toEqual({});
        expect(wrapper.text().trim()).toBe('No privado');
    })
})