import React from 'react';

const Banner = () => {
    return (
        <div className="backImg text-center space-y-5 py-[80px] px-[60px] Lg:py-[120px] lg:px-[100px] md:py-[100px] md:px-[80px] rounded-xl">
            <div className='space-y-5'>
                <h1 className='text-white text-3xl lg:text-5xl md:text-4xl font-bold leading-normal'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-[white] text-sm md:text-lg'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-6'>
                <div>
                    <button className='bg-[#0BE58A] py-3 px-6 rounded-full text-xl font-bold'>Explore Now</button>
                </div>
                <div>
                    <button className='bg-[#0BE58A] py-3 px-6 rounded-full text-xl font-bold'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;