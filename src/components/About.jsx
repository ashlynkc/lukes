import React from 'react'

function About() {
  return (
    
    <div className = 'w-full my-32'> 

        <div className = 'max-width-[1240px] mx-auto'>

            <div className = 'text-center'> 

                <h2 className = 'text-5xl font-bold'>Placeholder Text</h2>
                <p className = 'text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cum quibusdam non minus atque quod. Architecto et, fugiat perferendis nesciunt neque, illo, rem obcaecati fugit vel ducimus quae eligendi assumenda?</p>

            </div>

            <div className = 'grid md:grid-cols-3 gap-1 px-2 text-center'> 

                <div className = 'border py-8 rounded-xl shadow-xl'>

                    <p className = 'text-6xl font-bold text-blue-900'>Thingy</p>
                    <p className = 'text-gray-400 mt-2'>Thingy text</p>

                </div>
                <div className = 'border py-8 rounded-xl shadow-xl'>

                    <p className = 'text-6xl font-bold text-blue-900'>Thingy 2</p>
                    <p className = 'text-gray-400 mt-2'>Thingy 2 text</p>

                </div>
                <div className = 'border py-8 rounded-xl shadow-xl'>

                    <p className = 'text-6xl font-bold text-blue-900'>Thingy 3</p>
                    <p className = 'text-gray-400 mt-2'>Thingy 3 text</p>

                </div>

            </div>

        </div>

    </div>

  )
}

export default About