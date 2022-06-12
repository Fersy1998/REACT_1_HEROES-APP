import React, { useMemo } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string'
export const SearchScreen = () => {
    const navegador=useNavigate();
    const location=useLocation();
    //const query=queryString.parse(location);
    //Si q no existe entonces es vacío
    const {q=''}=queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({searchElement:q});
    const {searchElement}=formValues;
    const HeroesFiltered= useMemo(()=>getHeroByName(q), [q]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        navegador(`?q=${searchElement}`);
        //console.log(HeroesFiltered);
    }
    
    
  return (
    <div>
        <h1 >Búsqueda</h1> <hr />
        <div className='row'>
            <div className='col-5'></div>
                <form onSubmit={handleSubmit}>
                    <input type='text' 
                    placeholder='buscar un héroe'
                    className='form-control'
                    name='searchElement'
                    autoComplete='off'
                    value={searchElement}
                    onChange={handleInputChange}
                    />
                    <button className='btn btn-primary mt-5'type='submit' onClick={handleSubmit}>Buscar...</button>
                </form>
        
            </div>
            <div className='col-7 w-100 h-100'>
                <h4>Resultados</h4><hr />
                <div className='row'>
                {
                    (q==='')
                        ? <div className='alert alert-info'>Buscar un héroe</div>
                        :(HeroesFiltered.length===0)
                        &&  <div className='alert alert-danger'>Sin resultados para la búsqueda {q}</div>
                }
                
                {
                   HeroesFiltered.map(hero=>(<div className='col col-3 animate__animated animate__backInLeft' key={hero.id}><HeroCard hero={hero} /></div>))
                
                }
                </div>
            </div>
    </div>
  )
}
