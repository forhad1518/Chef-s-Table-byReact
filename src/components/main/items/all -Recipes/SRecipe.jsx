import React from 'react';

const SRecipe = ({ item }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = item;
    return (
        <div className='border-2 p-4 rounded-xl space-y-4'>
            <div className='border-b-2 space-y-3 pb-2'>
                <div>
                    <img className="rounded-lg w-full object-cover h-[200px]" src={recipe_image} alt="" />
                </div>
                <h1 className='text-xl font-bold'>{recipe_name}</h1>
                <p className='text-[#878787]'>{short_description}</p>
            </div>
            <div className='border-b-2 space-y-3 pb-3'>
                <h1>Ingradient: {ingredients.length}</h1>
                <div>
                    {
                        ingredients.map(item => <li className='text-[#878787]'>{item}</li>)
                    }
                </div>
            </div>
            <div className='space-y-3'>
                <div className='flex gap-3 text-[#282828CC]'>
                    <div>
                        <span><i class="fa-solid fa-clock"></i> {preparing_time} Minutes</span>
                    </div>
                    <div>
                        <span><i class="fa-solid fa-fire"></i> {calories} Calories</span>
                    </div>
                </div>
                <button className='bg-[#0BE58A] py-1 px-4 rounded-full text-lg font-bold'>Want to Cook</button>
            </div>
        </div>
    );
};

export default SRecipe;