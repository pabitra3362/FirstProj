import React from 'react'

function About() {
  return (
    <div>
      <div className="container min-h-[78vh] md:min-h-[89vh] lg:min-h-[83vh] flex justify-center items-center">
        <div className="about w-[80%] p-3 border-2 border-white text-center md:w-[70%] lg:w-[50%] duration-200">
        <h1 className='text-2xl text-white font-bold md:text-3xl'>About Us</h1>
        <p className='text-white text-xl mt-5 md:text-2xl'>We are a team of passionate specialists with an extensive knowledge of the video game industry.
          Our task is to make sure that players will be able to enjoy unique and unforgettable games.
          We’re not just a game company – we’re your game partner!</p>
        </div>
      </div>
    </div>
  )
}

export default About
