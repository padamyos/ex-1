import React from 'react';

const Presentation = () => {
    return (
        <div className='flex flex-col bg-white pt-24 pl-16'>
            <div className=' basis-1/2  '>

                <p className=' text-black text-3xl'>
                    Why Choose Us
                </p>
                <p className=' text-black text-l opacity-85'>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <div className=' text-black basis-1/2'>
                    <p className='text-black '>
                        Fast & Free Shipping
                    </p>
                    <p className='text-black opacity-75'>
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                    </p>
                </div>
            </div>
        </div>
    );
}



export default Presentation;
