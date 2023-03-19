import React, {useState} from 'react'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import lglogo from '../assets/logo3.png'

const Navbar = () => {

  // so, at first, our navBar is invisible.
  // once we use the handleClick function it sets the nav's usestate to the opposite,
  // which is true.

  const [nav, setNav] = useState (false)
  const handleClick = () => setNav(!nav)

  return (

    // NOTES: brackets [] define custom limits.
    <div className = 'w-screen h-[80px] z-10 fixed drop-shadow-xl' >

        {/* NOTES: p-2: padding all sides, px-2 or py-2 are padding on x and y axes */}
        <div className = 'bg-primary flex px-2 justify-between items-center w-full h-full'>

            <div className = 'flex items-center'> 

                {/* NOTES: mr is "margin right." */}
                <img className='w-10 object-contain md:h-12 md:w-20' src = {lglogo} alt = '/' ></img>

                <ul className = 'hidden md:flex'>

                  <li><a href = '/' className = 'btn no-animation btn-ghost rounded-btn'>Home</a></li>
                  <li><a href = '/' className = 'btn no-animation btn-ghost rounded-btn'>About</a></li>
                  <li><a href = '/' className = 'btn no-animation btn-ghost rounded-btn'>Notebook</a></li>

                </ul>

            </div>
            
            {/* 
            md-hidden hides anything under the medium width (768 px).
            we also toggle onClick the handleClick operation from above
            */}
            <div className = 'md:invisible text-gray-200 mr-4' onClick = {handleClick}> 

              {/* Simple ternary operator. Show the dropdown, on click make it x. */}
              {!nav ? <Bars3Icon className = 'w-5 btn-ghost rounded-btn'/> : <XMarkIcon className = 'w-5 flex-wrap relative z-2 btn-ghost rounded-btn' /> }

            </div>

        </div>

        <div data-te-animation-init="" data-te-animation-start="onHover" data-te-animation-reset="true" data-te-animation="[fade-in-down_1s_ease-in-out]">
          <ul className = {!nav ? 'hidden' : 'absolute bg-primary/80 w-full px-8 py-6'}> 

              <li className = 'border-b-2 w-full btn no-animation btn-ghost rounded-btn'><a href = '/'>Home</a></li>
              <li className = 'border-b-2 w-full btn no-animation btn-ghost rounded-btn'><a href = '/'>About</a></li>
              <li className = 'border-b-2 w-full btn no-animation btn-ghost rounded-btn'><a href = '/'>Notebook</a></li>

          </ul>
        </div>

    </div>

  )
}

export default Navbar