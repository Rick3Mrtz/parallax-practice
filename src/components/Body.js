import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import image2 from '../assets/image2.png';
import image12 from '../assets/image12.png'
import image10 from '../assets/image10.png';
import { Parallax } from 'react-parallax';


function Body() {


    return (
        <div className='relative px-6 lg:px-44 my-[20rem]'>

            <div className='relative flex items-center'>
                <h1 className='absolute w-full text-center text-7xl'>CHECKJATE</h1>
                </div>
            
                <div className='grid grid-cols-3 gap-10 mt-[15rem] h-[90vh] relative'>

                    <Parallax className='h-[70vh]' bgImage={image2} strength={700}>
                    <div style={{ height: '500px' }}></div>
                    </Parallax>

                    <Parallax className='h-[70vh] mt-[10rem]' bgImage={image12} strength={700}>
                    <div style={{ height: '500px' }}></div>

                    </Parallax>

                    <Parallax className='h-[70vh] mt-[20rem]' bgImage={image10} strength={700}>
                    <div style={{ height: '500px' }}></div>

                    </Parallax>
                    </div>

		</div>
    )
}

export default Body;

