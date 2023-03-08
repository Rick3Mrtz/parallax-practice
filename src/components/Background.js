import React from "react";
import { Parallax } from "react-parallax";
import moon from '../assets/moon.png'

function Background () {

    return (
        <div className="relative w-full h-[90vh] mt-[30rem]">
                    <Parallax className='h-[100vh] relative' bgImage={moon} strength={600}>
                    <h1 className='text-4xl font-bold text-white h-[30vh] flex justify-center items-center text-center leading-[3rem] absolute w-full'>Parallax Scrolling Practice
                        
                    </h1>    
                    </Parallax>
                </div>
    )
}

export default Background