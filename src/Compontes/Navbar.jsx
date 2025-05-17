import React from 'react'

function Navbar() {
    return (
        <>
            <div className='bg-cyan-300 flex justify-between items-center'>
                <div className='p-2  text-2xl'> &lt;Pass<span className='text-blue-600'>OP</span>&gt;</div>
                <div className='pr-10' >
                    <button className= 'flex   bg-blue-500 text-white p-2 rounded-2xl  justify-center items-center gap-2 '>
                        <img src="src/assets/IconBrandGithub.svg" alt="" className='invert h-6 w-6  ' />
                        <span>GitHub</span>
                    </button>
                </div>
            </div>



        </>
    )
}

export default Navbar