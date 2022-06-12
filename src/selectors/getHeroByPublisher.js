
import { heroes } from '../data/heroes';

export const getElementByPublisher=(publisher)=>{

    return heroes.filter(hero=>hero.publisher===publisher);
}