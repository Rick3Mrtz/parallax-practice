import React, { useEffect, useRef } from 'react';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import tower from '../assets/tower.png'
import { Parallax, Background, ParallaxLayer } from 'react-parallax';


function Section () {

    return (
       
            <div className='relative px-6 lg:px-16'>
            <section class="container px-0 md:flex md:items-center md:space-x-16 bg-white bg-opacity-5 my-44">		
			<div class="relative border-l-4 border-red-800 pl-6 py-12 md:py-0">
				<h2 class="text-6xl font-bold mb-6"><strong>Yall get this for FREE in Canada?</strong></h2>
				<p>bruh...</p>
			</div>
			<div class="relative w-full h-screen rounded-lg mt-[10rem]"> 
                <Parallax className='absolute bottom-0 mx-auto w-full object-cover' bgImage={image9} strength={-500}> 
                <div style={{ height: '800px' }}>
                </div>   
                </Parallax>
				
			</div>
		</section>

		<section class="container px-0 md:flex md:items-center md:space-x-6 bg-white bg-opacity-5 mt-12 my-44">	
			<div class="relative w-full h-[80vh] rounded-lg"> 
            <Parallax className='absolute bottom-0 h-[120vh] w-full' bgImage={tower} strength={-700}> 
                <div style={{ height: '90vh', width: '100%' }}>
                </div>   
                </Parallax>
			</div>	
			<div class="relative border-r-4 border-red-800 py-12 md:py-0">
				<h2 class="text-6xl font-bold mb-6 "><strong>Him Kardashian's Himothy Turner & Him Beam</strong></h2>
				<p className=''>Pop your images in a container with overflow hidden, size them a little larger than the container and set data-speed to auto. GSAP does the rest.</p>
			</div>		
		</section>
        </div>
        
    )
}

export default Section;