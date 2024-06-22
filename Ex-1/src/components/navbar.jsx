import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-24 bg-[#3b5d50] text-black relative shadow-sm font-mono" role="navigation">
            <a href="/" className="pl-16  text-white text-5xl font-black ">Furni</a>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
            
            <div className="pr-32 md:block hidden text-white font-bold  ">

                <a href="/" className="p-4">Home</a>
                <a href="/" className="p-4">Shop</a>
                <a href="/" className="p-4">About</a>
                <a href="/" className="p-4">Services</a>
                <a href="/" className="p-4">Blong</a>
                <a href="/" className="p-4">Contact Us</a>
                <div className="pl-4 text-2xl inline-flex "> 
                    <a href="/" className="px-10 text-2xl "><CgProfile/></a>
                    <a href="/" className=" text-2xl"><FaShoppingCart /></a>
                </div>
                    

            </div>
            
        </nav>
    );
};

export default Navbar;