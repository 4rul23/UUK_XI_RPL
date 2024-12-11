import React from 'react'
import Image from 'next/image';
import Logo from '../../../public/logo-removebg-preview.png'
const Navbar = () => {
  return (
    <nav className="w-full bg-customBlue" >
      <div className="container  flex items-center justify-between">
        <Image 
          src={Logo}
          alt="Company Logo" 
          width={100} 
          height={100}
          className="cursor-pointer mx-8"
        />
          <ul className='flex p-6 gap-5 text-white font-bold mx-10'>
            <li>Customer</li>
            <li>Rahmat dani</li>
            <li>Oktavianto</li>
            <li>Fadhlan</li>
            <li>Yayu Aprilika</li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;