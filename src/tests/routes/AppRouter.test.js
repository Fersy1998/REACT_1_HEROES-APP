import { AppRoutes } from "../../routes/AppRoutes";
import React from 'react';
import {mount} from 'enzyme';
import { AuthContext } from "../../auth/authContext";
describe('pruebas en AppRoutes.js', ()=>{
    test('should show the search screen if the user is authenticated', () => {
        const contextValue={
            user:{
                name:'Fesry',
                logged:true
            }
            
        }
        const wrapper= mount(<AuthContext.Provider value={contextValue}>
                                <AppRoutes />
                            </AuthContext.Provider>);
        //console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toEqual(true);
        
    })
    test('should show the login component if the user isn´t authenticated', () => {
        const contextValue={
            user:{
                logged:false
            }
            
        }
        const wrapper= mount(<AuthContext.Provider value={contextValue}>
                                <AppRoutes />
                            </AuthContext.Provider>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h5').text().trim()).toBe('Login Screen');
        
    })
    
    
    

})