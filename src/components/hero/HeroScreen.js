import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
//import getHeroById from '../../selectors/getHeroById'

const heroesImg=require.context('../../assets', true);


export const HeroScreen = () => {
    //const params=useParams()

    const {heroeId}=useParams();
    const hero=useMemo(()=>getHeroById(heroeId), [heroeId]);
    const navegar=useNavigate();
    if(!hero){
        return <Navigate to="/" />
    }
    const handleReturn=()=>{
        navegar(-1);
    }
  return (
    <div className='row mt-5 animate__animated animate__backInUp'>
        <div className='col-4'>
            <img src={heroesImg(`./${hero.id}.jpg`)} alt={hero.superhero} className='img-thumbnail'/>
        
        </div>
        <div className='col-8'>
            <h3>{hero.superhero}</h3>
            <ul className='list-group '>
                <li className='list-group-item'><b>alter ego: </b>{hero.alter_ego}</li>
                <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
                <li className='list-group-item'><b>First appeareance: </b>{hero.first_appearance}</li>
            </ul>
            <h5 className='mt-5'>Characters</h5>
            <p>{hero.characters}</p>
            <button className='btn btn-outline-info' onClick={handleReturn}>Regresar</button>
        </div>
    
    </div>
  )
}
