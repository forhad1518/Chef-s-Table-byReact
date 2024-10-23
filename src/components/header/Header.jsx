import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-5 gap-x-3'>
            <div>
                <h1 className='text-3xl font-bold'>Recipe Calories</h1>
            </div>
            <div className='flex gap-x-4 text-[#150B2BB3] max-md:hidden'>
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            <div className='flex gap-4 items-center'>
                <div>
                    <input className='bg-[#150B2B0D] py-3 px-4 rounded-full' type="search" name="" id="" placeholder='Search' />
                </div>
                <div>
                    <h2><i className="fa-solid fa-user bg-[#0BE58A] rounded-full py-3 px-[13px]"></i></h2>
                </div>
            </div>
            <div className='md:hidden'>
                <h2><i className="fa-solid fa-bars bg-[#0BE58A] rounded-full py-3 px-[13px]"></i></h2>
            </div>
        </div>
    );
};

export default Header;