"use client";
import Image from 'next/image'
import Sidebar from './components/ui/sidebar'
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className='bg-[var(--black-color)] pt-4 sm:pt-[30px] px-5 lg:px-[80px]'>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <nav className="bg-white rounded-full pl-5 sm:pl-7 pr-7 py-[10px] sm:py-[14px] w-full flex items-center justify-between">
        <div>
            <Image src="/logo.svg" alt='Store Logo' width={80} height={28} />
        </div>

        <div className="hidden lg:gap-[50px] md:text-[16px] md:flex md:gap-5 lg:text-[16px]">
          <Link href="#" className="text-[var(--blue-color)] font-semibold">Home</Link>
          <Link href="#" className="text-black hover:text-[var(--blue-color)] font-medium">Our Store</Link>
          <Link href="#" className="text-black hover:text-[var(--blue-color)] font-medium">About Us</Link>
          <Link href="#" className="text-black hover:text-[var(--blue-color)] font-medium">Blog</Link>
        </div>

        <div className="relative md:flex justify-start hidden">
          <button className="pl-4 pr-[88px] py-[6px] text-[16px] font-medium border-2 border-[var(--blue-color)] text-[var(--blue-color)] rounded-full hover:bg-blue-100 md:text-[14px] cursor-pointer">
            Login
          </button>
          <button className="absolute right-0 px-[15px] py-[7px] text-[16px] font-medium bg-[var(--blue-color)] hover:bg-blue-600 text-white rounded-full md:text-[14px] cursor-pointer">
            Sign up
          </button>
        </div>
          <div onClick={()=> setIsSidebarOpen(true)} className='flex md:hidden pr-4 cursor-pointer'>
            <Image src="/sidebar-icon.svg" alt='Sidebar Icon' width={24} height={24} />
          </div>
      </nav>
    </div>
  )
}

export default Navbar
