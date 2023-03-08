import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import backgroundPic from '../assets/cover.png';
import { Parallax } from 'react-parallax';


function Header() {

    return (
                
                <div className="relative w-full h-[90vh]">
                    <Parallax className='h-[90vh] relative' bgImage={backgroundPic} strength={400}>
                    <h1 className='text-4xl font-bold text-white h-[150vh] flex justify-center items-center text-center leading-[3rem] absolute w-full'>
                        This one is for you,<br></br> JATE.
                    </h1>    
                    </Parallax>
                </div>
    )
}


export default Header