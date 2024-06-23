import React from 'react'

function Recommend() {
    return (
        <div className=' flex flex-row bg-white pl-12 pr-20 pt-24'>
            <div className=' basis-1/4 '>
                <p className='font-bold text-black text-4xl'>

                    Crafted with excellent material.
                </p>
                <p className='pt-6 text-black opacity-75'>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique
                </p>
                <button className=' bg-black opacity-85 text-white rounded-full px-8 py-4 mt-8'>
                    Explore
                </button>
            </div>
            <div className=' basis-1/4 '>
                <img
                    className='size-4/4'
                    src='https://untree.co/demos/furni/images/product-1.png'
                />
                <p className=' text-center text-xl font-bold mt-8'>
                    Nordic Chair
                </p>
                <p className=' text-center mt-4 text-2xl font-black'>
                    $50.00
                </p>
            </div>
            <div className=' basis-1/4 '>
                <img
                    className='size-4/4'
                    src='https://untree.co/demos/furni/images/product-2.png'
                />
                <p className=' text-center text-xl font-bold mt-8'>
                    Kruzo Aero Chair
                </p>
                <p className=' text-center mt-4 text-2xl font-black'>
                    $78.00
                </p>
            </div>
            <div className=' basis-1/4 '>
                    <img
                        className='size-4/4'
                        src='https://untree.co/demos/furni/images/product-3.png'
                    />
                    <p className=' text-center text-xl font-bold mt-8'>
                        Ergonomic Chair
                    </p>
                    <p className=' text-center mt-4 text-2xl font-black'>
                        $43.00
                    </p>
                </div>

            
        </div>
    )

}

export default Recommend