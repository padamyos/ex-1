import React from 'react';

const Presentation = () => {
    return (
        <div className=' bg-white pt-24 pl-16 flex flex-row'>
            <div className=' basis-6/12 '>

                <p className='  text-black text-3xl '>
                    Why Choose Us
                </p>
                <p className=' text-black text-l opacity-85'>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>

                <div className='flex flex-row mt-10 '>
                    <div className='basis-1/2'>

                        <p className='text-black '>
                            Fast & Free Shipping
                        </p>
                        <p className='text-black opacity-75'>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                        </p>
                    </div>
                    <div className='ml-10 basis-1/2'>
                        <p className='text-black '>
                            Easy to Shop

                        </p>
                        <p className='text-black opacity-75'>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>

                </div>
                <div className='flex flex-row mt-10 '>
                    <div className=' basis-1/2'>
                        <p className='text-black '>
                            24/7 Support
                        </p>
                        <p className='text-black opacity-75'>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>
                    <div className='ml-10 basis-1/2'>
                        <p className='text-black '>
                            Hassle Free Returns

                        </p>
                        <p className='text-black opacity-75'>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>

                </div>


            </div>

            <div className='basis-1/2'>
                <img src="https://untree.co/demos/furni/images/why-choose-us-img.jpg" className=' h-full px-20 py-10  rounded-2xl' alt="" />

            </div>
        </div>
    );
}



export default Presentation;
