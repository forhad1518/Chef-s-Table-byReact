
import { useEffect, useState } from 'react';
import SRecipe from './SRecipe';

const TRecipes = () => {
    const [items , setItems] = useState([]);

    useEffect(() => {
        fetch('loadData.json')
        .then(res => res.json())
        .then(data => setItems(data))
    } ,[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {
                items.map(item => <SRecipe key={item.recipe_id} item={item}></SRecipe>)
            }
        </div>
    );
};

export default TRecipes;