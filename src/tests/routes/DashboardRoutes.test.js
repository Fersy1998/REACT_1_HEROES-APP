import { DashboardRoutes } from "../../routes/DashboardRoutes";
import {mount} from 'enzyme'
import {AuthContext} from '../../auth/authContext'
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en DashboardRoutes.js', ()=>{

   const contextValue={user:{
    logged:true,
    name:'Sara'
   }}
    test('should show correctly /search', () => { 
        const wrapper=mount(
        <AuthContext.Provider value={contextValue}>
        
            <MemoryRouter initialEntries={['/search']}>
                <DashboardRoutes />
            </MemoryRouter>
          
        </AuthContext.Provider>  );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span').text().trim()).toBe('Sara');
    
    
    })
    test('should show correctly /marvel', () => { 
        const wrapper=mount(
        <AuthContext.Provider value={contextValue}>
  
            <MemoryRouter initialEntries={['/marvel']}>
                <DashboardRoutes />
            </MemoryRouter>
          
        </AuthContext.Provider>  );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text()).toContain('Marvel Comics');

    })
    test('should show correctly /dc', () => { 
        const wrapper=mount(
        <AuthContext.Provider value={contextValue}>
  
            <MemoryRouter initialEntries={['/dc']}>
                <DashboardRoutes />
            </MemoryRouter>
          
        </AuthContext.Provider>  );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text()).toContain('DC Comics');

    })
})