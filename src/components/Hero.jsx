
import React from 'react';

import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
    return (
        <div className="relative w-full  overflow-hidden border-b border-gray-100">
            {/* Top-left gradient blur */}

            <div
                className="
          absolute bottom-[450px] left-[-160px] 
          w-[300px] h-[400px]
          rounded-full
          bg-gradient-to-tr from-success-800 via-success-400 to-success-200
          blur-[100px]
          opacity-60
          pointer-events-none
        "
            />


            {/* Bottom-right gradient blur */}

            <div
                className="
          absolute top-[400px] right-[-220px]
          w-[400px] h-[500px]
          rounded-full
          bg-gradient-to-br from-primary-800 via-primary-600 to-primary-400
          blur-[100px]
          opacity-70
          pointer-events-none
        "
            />


            {/* Hero content */}
            <div className="relative h-full  z-10 text-center px-4 md:px-0 ">
                {/* <Header /> */}
                <div className=' relative h-full vertical-center '>
                    <div className='p-16  md:py-24 space-y-5 vertical-center '>
                        {/* <div className='horizontal-center md:text-2xl  font-medium text-secondary-500'>
                            <span>{title.quote1}</span><span className='bg-gradient-to-r from-secondary-500 via-primary-500 to-primary-800 bg-clip-text text-transparent'>{title.quote2}</span>
                        </div> */}
                        <div className=' md:text-6xl text-2xl gap-x-2 md:max-w-[60%]'>
                            <span className="text-warning-400">
                                hello
                            </span>{' '}
                            <span>world</span>
                        </div>
                        <div className='center'>
                            <button
                                onClick={() => {
                                    const formSection = document.getElementById('form');
                                    if (formSection) {
                                        formSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className='bg-primary-600 rounded-full px-4 py-2 center gap-x-2 text-white text-base font-medium'>
                                Request Demo
                                <HiArrowNarrowRight size={20} />
                            </button>
                        </div>

                    </div>
                    <div className=' w-fit relative h-full center items-end '>
                        <img src={'/icons/impression.svg'} className='absolute -right-40 bottom-7 max-md:w-[20vw] max-md:h-[22vh] max-md:-right-9 max-md:-bottom-16' />
                        <img src={'/icons/realtime.svg'} className='' />
                        <img src={'/icons/ctr.svg'} className='absolute -left-45 bottom-20 max-md:w-[20vw] max-md:h-[22vh] max-md:-left-9 max-md:bottom-10' />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hero;
