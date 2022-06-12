import { SearchScreen } from "../../../components/search/SearchScreen";
import {mount} from 'enzyme'
import { MemoryRouter } from "react-router-dom";


//Hacems mock de react-router-dom, pero copiamos todos los demas elementos y los dejamos igual
//y modificamos solamente el useNavigate para poderlo usar como mock en la prueba 
// de -->should call navigate to a new Screen
//Debe llamarse mockNavigate para que funcione
const mockNavigate=jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=> mockNavigate,
}))

describe('Pruebas en SearhcScreen.js', ()=>{
    test('should shows corrrectly with default values', () => { 
        const wrapper=mount(
            <MemoryRouter initialEntries={['/search']}>
            
                <SearchScreen />
            </MemoryRouter>
        
        
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text()).toBe('Buscar un héroe');
    
    })
    test('should Batman and the input with queryString value', () => { 
        const wrapper=mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
            
                <SearchScreen />
            </MemoryRouter>)
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    })
    test('should show an error if hero isn´t found', () => { 
        const wrapper=mount(
            <MemoryRouter initialEntries={['/search?q=batman34535']}>
            
                <SearchScreen />
            </MemoryRouter>)
        expect(wrapper.find('.alert-danger').text()).toEqual(`Sin resultados para la búsqueda batman34535`);
        expect(wrapper).toMatchSnapshot();
    
    })
    test('should call navigate to a new Screen', () => { 
        const wrapper=mount(
            <MemoryRouter initialEntries={['/search']}>
            
                <SearchScreen />
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change', {target:{
            name:'searchElement',
            value:'batman'
        }})
        wrapper.find('form').prop('onSubmit')({ preventDefault(){}})
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman')
    })

})