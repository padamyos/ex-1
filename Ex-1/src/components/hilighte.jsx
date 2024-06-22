import React from 'react'

function Hilighte() {
    return (
        <div className=' w-auto h-auto bg-[#3b5d50] pl-16 pt-8 '>
            <div className='flex'>

                <div className='pt-24 flex-auto size-2/4'>

                    <p className='text-white font-black text-6xl   '>
                        Modern Interior Design Studio
                    </p>
                    <p className='text-[#aac3b4] font-serif text-sm pt-10'>
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                    </p>
                    <button className="bg-yellow-400 text-black font-semibold py-4 px-12 rounded-full mt-8 ">
                        Shop Now
                    </button>
                    <button className="bg-[#3b5d50] text-white font-semibold ml-2 py-4 px-8 rounded-full mt-8 border-gray-500 border-2  hover:border-white">
                        Explore
                    </button>
                </div>
                <img
                    className='size-4/6 flex-auto mr-12'
                    src='https://untree.co/demos/furni/images/couch.png'
                />
            </div>


        </div>

    )
}

export default Hilighte