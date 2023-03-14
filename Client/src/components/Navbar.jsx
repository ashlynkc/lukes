import React, {useState} from 'react'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import lglogo from '../assets/LukeLogoW.png'

const Navbar = () => {

  // so, at first, our navBar is invisible.
  // once we use the handleClick function it sets the nav's usestate to the opposite,
  // which is true.

  const [nav, setNav] = useState (false)
  const handleClick = () => setNav(!nav)

  return (

    // NOTES: brackets [] define custom limits.
    <div className = 'w-screen h-[80px] z-10 bg-slate-900 fixed drop-shadow-xl' >

        {/* NOTES: p-2: padding all sides, px-2 or py-2 are padding on x and y axes */}
        <div className = 'flex px-2 justify-between items-center w-full h-full'>

            <div className = 'flex items-center'> 

                {/* NOTES: mr is "margin right." */}
                <img className='w-10 object-contain md:h-20 md:w-20' src = {lglogo} alt = '/' ></img>

                <ul className = 'hidden md:flex'>

                  <li>Home</li>
                  <li>About</li>
                  <li>Resume</li>
                  <li>Posts</li>

                </ul>

            </div>
            
            {/* 
            md-hidden hides anything under the medium width (768 px).
            we also toggle onClick the handleClick operation from above
            */}
            <div className = 'md-hidden text-gray-200 mr-4' onClick = {handleClick}> 

              {/* Simple ternary operator. Show the dropdown, on click make it x. */}
              {!nav ? <Bars3Icon className = 'w-5'/> : <XMarkIcon className = 'w-5 flex-wrap relative z-2' /> }

            </div>

        </div>

        <ul className = {!nav ? 'hidden' : 'absolute bg-slate-900 w-full px-8 py-4'}> 

            <li className = 'border-b-2 border-zinc-300 w-full'>Home</li>
            <li className = 'border-b-2 border-zinc-300 w-full'>About</li>
            <li className = 'border-b-2 border-zinc-300 w-full'>Resume</li>
            <li className = 'border-b-2 border-zinc-300 w-full'>Posts</li>

        </ul>

    </div>

  )
}

export default Navbar