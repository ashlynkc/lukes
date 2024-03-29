import React from 'react'

import bgImg from '../assets/orca.png'

function Hero() {
  return (
    <div className = 'w-full bg-base-100 h-screen flex flex-col justify-between'>

        <div className = 'grid md:grid-cols-2 max-w-[1240px] m-auto'>

            <div className = 'flex flex-col justify-center md:items-start w-full px-2 py-8'>

                <p className = 'text-white text-2xl'>An Awesome Guy</p>
                <h1 className = 'py-3 text-5xl md:text-7xl font-bold'>Luke Graham</h1>
                <p className = 'text-2xl'>Work In Progress</p>
                <button className = 'btn btn-accent text-gray-200 py-3 px-6 sm:w-[60%] my-4'>About Me</button>

            </div>

            <div>

                <img className = 'w-full' src = {bgImg} alt = '/' />

            </div>
            

        </div>

    </div>
  )
}

export default Hero