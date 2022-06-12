import { HeroScreen } from "../../components/hero/HeroScreen";
import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from "react-router-dom";

const mockUseNavigate=jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockUseNavigate
}))

describe('Pruebas en HeroScreen.js', ()=>{
    
    test('should´nt show a hero screen (information, see more) if hero doesn´t exist', () => { 
        const wrapper=mount(
        <MemoryRouter initialEntries={['/hero']}>
            <Routes >
                <Route path='/hero' element={<HeroScreen />}/>
                <Route path='/' element={<h1>No hero defined</h1>} />
            </Routes>
        </MemoryRouter>)
        expect(wrapper.find('h1').text().trim()).toBe('No hero defined')
    
    })
    test('should show a hero screen (information, see more) if hero exists', () => { 
        const wrapper=mount(
            <MemoryRouter initialEntries={['/hero/marvel-captain']}>
                <Routes >
                    <Route path='/hero/:heroeId' element={<HeroScreen />}/>
                    <Route path='/' element={<h1>No hero defined</h1>} />
                </Routes>
            </MemoryRouter>)
           // console.log(wrapper);
            expect(wrapper.find('h3').text().trim()).toBe('Captain America')
        //OJO, EL :heroeID debe ser exactamente el mismo nombre que en la definición de las rutas
    })
    test('should return to the previous page', () => {
        const wrapper=mount(
            <MemoryRouter initialEntries={['/hero/marvel-captain']}>
                <Routes >
                    <Route path='/hero/:heroeId' element={<HeroScreen />}/>
                </Routes>
            </MemoryRouter>)
            wrapper.find('button').prop('onClick')();
            expect(mockUseNavigate).toHaveBeenCalledWith(-1);
    })
    test('should´nt show a hero screen (information, see more) if the hero parameter is filled with no valid information', () => { 
        const wrapper=mount(
        <MemoryRouter initialEntries={['/hero/u3ueiuw']}>
            <Routes >
                <Route path='/hero/:heroeId' element={<HeroScreen />}/>
                <Route path='/' element={<h1>No hero defined</h1>} />
            </Routes>
        </MemoryRouter>)
         expect(wrapper.find('h1').text().trim()).toBe('No hero defined')
    
    })
})