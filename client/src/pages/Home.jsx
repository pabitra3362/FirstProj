import React, {useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'



function Home() {
  
  const typeArray=['Discover epic adventures','Thrilling challenges at our gaming website','Dive into immersive worlds','Compete in intense battles','Connect with a vibrant community of gamers','Game on!']

 

  
  return (
    <div>
      
        <div className="container min-h-[78vh] md:min-h-[89vh] lg:min-h-[83vh]">
        <div className="firstContainer text-white absolute top-36 p-8 md:w-[60%]  md:leading-relaxed md:p-4 md:right-48 md:top-44 lg:w-[40%]  lg:leading-relaxed lg:p-4 lg:right-24 lg:top-44">
          <h3 className='text-2xl my-2 md:text-3xl lg:text-[2vw]'>Introducing</h3>
          <h2 className='text-red-500 my-2 animate-pulse text-5xl font-bold md:text-6xl lg:text-[5vw]'>G-gaming</h2>
          <h3 className='text-2xl md:text-3xl lg:text-[2vw] my-2'>Advance your gaming experience</h3>
          <div id='typewriter' className='text-xl my-2 md:text-2xl lg:text-2xl lg:mt-3'><Typewriter
            words={typeArray}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
            
          /></div>
        </div>
      </div>
    </div>
  )
}

export default Home
